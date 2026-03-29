

# Update Telegram Channel Description on /siadlakvip

## Summary

Replace the generic Telegram description with the actual channel intro message, explaining the VIP acronym (Value · Impact · Progress) and the raw, unfiltered nature of the content.

## Changes

### `src/pages/SiadlakVIP.tsx` (lines 52-68)

Replace the card content with the real channel description:

1. **VIP acronym**: "Value · Impact · Progress" as a subtitle or tagline
2. **Core description**: "Mój warsztat. Miejsce na surowe myśli, zanim oprawię je w ramki i nazwę produktem."
3. **Honesty note**: Brief warning about "odklejone" deep explorations
4. **Three pillars** with emoji markers:
   - ➡️ Wartość (Value) — z doświadczania życia
   - 🔀 Wpływ (Impact) — zmiana perspektywy
   - ↗️ Postęp (Progress) — Twoja przestrzeń do zagospodarowania
5. **Closing**: "Podróż do środka" sentiment
6. Keep existing CTA button unchanged

Style: Use existing `text-dim` for body text, `text-white` for emphasis. Keep the card structure (`bg-surface border border-white/10`).

