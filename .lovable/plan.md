

# Integracja formularza Reset z MailerLite

## Podsumowanie

Po wysłaniu formularza lead capture na stronie `/reset`, dodaj subskrybenta (imię + email) do grupy MailerLite `184282896583886063` za pomocą skryptu MailerLite Universal, który jest już załadowany w `index.html`.

## Zmiany

### `src/pages/Reset.tsx`

W funkcji `handleSubmitLead` (po walidacji, przed `setPhase("result")`):

1. Wywołaj `window.ml('subscribe', ...)` z danymi formularza i ID grupy
2. Dodaj deklarację typu dla `window.ml` (TypeScript)
3. Nie blokuj przejścia do wyniku — subskrypcja działa asynchronicznie w tle (fire-and-forget)

```typescript
// Po walidacji:
if (typeof window.ml === 'function') {
  window.ml('subscribe', {
    fields: { email, name },
    groups: ['184282896583886063'],
  });
}
setPhase("result");
```

### `src/vite-env.d.ts`

Dodaj deklarację typu `ml` na obiekcie `Window`, żeby TypeScript nie zgłaszał błędu.

## Dlaczego tak

- Skrypt MailerLite Universal jest już załadowany globalnie w `index.html` (account `484845`)
- Nie wymaga Cloud/edge functions — działa po stronie klienta
- Fire-and-forget: użytkownik widzi wynik natychmiast, subskrypcja dzieje się w tle

