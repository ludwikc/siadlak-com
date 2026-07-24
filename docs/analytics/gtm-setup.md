# GTM setup — GTM-5QCTH53T

Click-through spec for the Google Tag Manager container. The site pushes a
typed event layer to `window.dataLayer` (see `src/lib/analytics.ts`); GTM turns
those events into GA4 / Google Ads / Meta / Clarity tags. All marketing tags are
gated by Google Consent Mode v2 (defaults DENIED, set inline in `index.html`
before GTM loads) and by an explicit no-bot exception.

## Accounts / IDs

| Thing | ID | Where |
| --- | --- | --- |
| GTM container | `GTM-5QCTH53T` | inline in `index.html` |
| Google Ads | `AW-997103617` | currently inline gtag in `index.html` (consent-gated) |
| GA4 | `G-XXXXXXXX` (create a new property) | GTM |
| Meta Pixel | `2656464611304919` (shared with lifehackerzy.pl — reused per owner) | GTM |
| Microsoft Clarity | `sixkjtkgsm` | GTM |
| CMP | CookieYes `7a00710ab4d1d167ad01acea` | inline in `index.html` |

One-time: Admin → Container Settings → **Enable consent overview**. In CookieYes,
confirm Google Consent Mode is ON and categories map analytics→`analytics_storage`,
advertisement→`ad_storage`/`ad_user_data`/`ad_personalization`; add
`assets.mailerlite.com` to the do-not-auto-block list (forms are core).

## Variables

Data Layer Variables (Version 2): `funnel_slug`, `funnel_phase`, `form_id`,
`source`, `checkout_url`, `placement`, `dtr_variant`, `experiment_id`, `variant`,
`trigger_type`, `offer`, `score`, `tier`, `product`, `value`, `currency`,
`page_path`, `page_title`, `cky_analytics`, `cky_advertisement`.

Custom JavaScript variable **`JS - Is Webdriver`**:
```js
function () {
  return !!(navigator.webdriver || /Googlebot|HeadlessChrome|Lighthouse/i.test(navigator.userAgent));
}
```

## Triggers

| Name | Type | Condition |
| --- | --- | --- |
| `CE - page_view` | Custom Event | `page_view` |
| `CE - cky (analytics)` | Custom Event | `cky_consent_update` AND `cky_analytics` = `true` |
| `CE - cky (ads)` | Custom Event | `cky_consent_update` AND `cky_advertisement` = `true` |
| `CE - lead_submitted` | Custom Event | `lead_submitted` |
| `CE - registration_click` | Custom Event | `registration_click` |
| `CE - registration_complete` | Custom Event | `registration_complete` |
| `CE - oto_purchase_click` | Custom Event | `oto_purchase_click` |
| `CE - discovery_booking_click` | Custom Event | `discovery_booking_click` |
| `CE - all app events` | Custom Event | Event matches RegEx `^(funnel_view\|registration_click\|registration_complete\|lead_submitted\|webinar_bar_click\|cta_click\|oto_view\|oto_expired\|oto_purchase_click\|reset_quiz_start\|reset_quiz_complete\|discovery_booking_click\|exit_intent_shown\|exit_intent_dismissed\|exit_intent_converted\|experiment_exposure\|dtr_variant_applied)$` |
| `EX - webdriver` | Custom Event, RegEx `.*` | `JS - Is Webdriver` = `true` — attach as a **blocking exception on every tag** |

## Tags

| # | Tag | Type | Trigger | Consent | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | GA4 Config | Google tag | Initialization – All Pages | built-in | `G-XXXXXXXX`; set `send_page_view=false`; in GA4 admin disable Enhanced Measurement "page changes based on history events" |
| 2 | GA4 page_view | GA4 Event | `CE - page_view` | built-in | params `page_path`, `page_title` |
| 3 | GA4 app events | GA4 Event | `CE - all app events` | built-in | event name `{{Event}}`; attach the relevant DLVs |
| 4 | Ads Conversion Linker | Conversion Linker | Initialization – All Pages | built-in | needed for gclid |
| 5 | Ads Remarketing | Google Ads Remarketing | `CE - page_view` | built-in | `AW-997103617` — **only add if you remove the inline gtag from index.html** (avoid double-count) |
| 6 | Ads Conversion: Lead | Google Ads Conversion | `CE - lead_submitted` | built-in | new "Lead" conversion action |
| 7 | Ads Conversion: Registration | Google Ads Conversion | `CE - registration_complete` | built-in | **primary** conversion |
| 8 | Ads Conversion: OTO | Google Ads Conversion | `CE - oto_purchase_click` | built-in | value 77 PLN |
| 9 | Meta Base + PageView | Meta Pixel template | `CE - cky (ads)` — Once per page | **Additional: `ad_storage`, `ad_user_data`** | pixel `2656464611304919` |
| 10 | Meta PageView (SPA) | Meta Pixel template | `CE - page_view` | Additional: `ad_storage`, `ad_user_data` | sequence after #9 |
| 11 | Meta Lead | Meta Pixel (Lead) | `CE - lead_submitted` | Additional: `ad_storage`, `ad_user_data` | |
| 12 | Meta InitiateCheckout | Meta Pixel (InitiateCheckout) | `CE - registration_click` + `CE - oto_purchase_click` | Additional: `ad_storage`, `ad_user_data` | value on OTO |
| 13 | Clarity | Microsoft Clarity template | `CE - cky (analytics)` — Once per page | **Additional: `analytics_storage`** | project `sixkjtkgsm`; SPA-aware once loaded; reads `dtr_*` / experiment custom tags set via `clarity("set", …)` |

In GA4 admin mark `lead_submitted`, `registration_complete`, `oto_purchase_click`,
`discovery_booking_click` as **key events**.

## Deploy ordering

1. Build + publish this container version first.
2. Then deploy the code (consent defaults + dataLayer events are already live-safe).
3. `AW-997103617` currently fires via the inline gtag in `index.html` (now
   consent-gated). Leave it inline **or** move it to GTM tag #5 and delete the
   inline block in the same deploy — never run both, or remarketing double-counts.

## Notes

- `page_view` is pushed once per SPA route by `PageViewTracker`; GA4's own
  pageview is off (`send_page_view=false`) so there is no double-count.
- Prerender/bots never emit events (guarded in `src/lib/env.ts`), and the
  `EX - webdriver` exception is the belt-and-suspenders inside GTM.
- Consent granted mid-session replays the current `page_view` once
  (`initAnalytics` in `src/lib/analytics.ts`) so late-unlocked pixels still see it.
