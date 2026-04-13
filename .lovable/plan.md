
Goal

Make the MailerLite form on `/reset` render reliably in production on Vercel so that when the quiz reaches the lead-capture step, the page shows:

```html
<div class="ml-embedded" data-form="9Ffuno"></div>
```

What I found

- `index.html` already loads the MailerLite Universal bootstrap globally in `<head>` with `ml('account', '484845')`.
- On `/reset`, the form placeholder is rendered only later, when `phase === "lead-capture"`.
- The current fix tries to solve this by appending `https://assets.mailerlite.com/js/universal.js` again inside `useEffect`.
- That is fragile in production because it re-adds the external script without re-running the original full bootstrap logic in a controlled way, and cleanup removes the script again. In an SPA on Vercel, that can easily leave the later-mounted `.ml-embedded` node undiscovered.

Implementation plan

1. Replace the ad-hoc script re-injection in `src/pages/Reset.tsx`
- Remove the current `useEffect` that appends/removes `universal.js`.
- Keep the success listener logic, but separate it from script loading.

2. Introduce a dedicated MailerLite embed helper
- Create a small reusable component or hook for embedded forms.
- It will:
  - render the exact placeholder div with `class="ml-embedded"` and `data-form="9Ffuno"`
  - detect whether `window.ml` is already available
  - if MailerLite is not initialized yet, run the same bootstrap logic as in `index.html`
  - if the script is already present, trigger a safe re-scan/re-init for the newly mounted placeholder instead of blindly adding/removing duplicate script tags

3. Mount that helper only in the lead-capture phase
- Keep the current quiz flow unchanged.
- When `phase === "lead-capture"`, render the MailerLite embed helper inside the existing container.
- Preserve the current “Pomiń i zobacz wynik” behavior.

4. Keep localStorage cleanup intact
- Do not change the score/reset logic except where needed for event handling.
- Ensure success still:
  - clears `reset-quiz-answers`
  - transitions to `result`

5. Verify the same production-safe pattern against `/newsletter`
- The newsletter page currently uses a different embed approach (`window.ml("embed", ref.current)`).
- I will compare the final `/reset` solution with `/newsletter` and, if the same weakness exists there, align both to one reliable implementation so production behavior is consistent.

Technical details

Files to update
- `src/pages/Reset.tsx`
- likely a new shared helper, e.g. `src/components/MailerLiteEmbed.tsx` or `src/lib/mailerlite.ts`

Why this approach
- Minimal surface-area change to the quiz page
- Avoids race conditions from repeatedly appending/removing third-party scripts
- Uses one consistent MailerLite mounting strategy for SPA route changes
- Safer for production hosts like Vercel where timing differs from local preview

Validation after implementation

I will verify:
1. `/reset` quiz reaches the lead-capture phase and the form visibly renders
2. the DOM contains the expected `.ml-embedded[data-form="9Ffuno"]`
3. submitting the form still moves the user to the result screen
4. localStorage is cleared after success / skip
5. the same flow works after a hard refresh and after client-side navigation
6. production-style behavior is tested end-to-end, not only in local preview

Expected outcome

After the fix, `/reset` will reliably display the embedded MailerLite form in production instead of showing an empty area when the lead-capture step appears.
