## Goal

Replace the "Sam kurs to dopiero początek" community section on `/program/produktywnosc` with the purple Lifehackerzy section from `/program/uwaznosc`, extracted as a reusable component.

## Why extract a component

The Lifehackerzy section (~530 lines) is already used on UwazneZycie and referenced on 4+ other program pages (MeskiKompas, TrainTheTrainerAI, LifeOSSystemUpgrade, Program hub). Extracting it into a shared component avoids duplication and makes future copy updates trivial.

## Changes

### 1. Create `src/components/sections/LifehackerzySection.tsx`

Extract lines 1004-1531 from `UwazneZycie.tsx` into a standalone component. It includes:
- Purple gradient background with radial overlays
- Header with "Bonus" badge and "NIE BEDZIESZ SAM NA TEJ WYPRAWIE" title
- Lifehackerzy logo (OptimizedImage)
- 4 feature cards: 1234 Daily Coaching, DeepWork.pl, Forum (180+ threads), 50+ ProTipy
- "Kto to jest Lifehacker?" identity section
- "Dlaczego to ma znaczenie?" motivation section
- Statistics section (completion rates)
- Summary checklist

The component will accept no props (it's fully self-contained content). All required icon imports and the logo asset import will move into the component file.

### 2. Update `src/pages/program/UwazneZycie.tsx`

Replace lines 1004-1531 (the inline Lifehackerzy section) with `<LifehackerzySection />`. Remove now-unused icon imports that were only needed for that section (Video, MessageSquare, PlayCircle, Heart, Globe, etc. -- after verifying they aren't used elsewhere in the file).

### 3. Update `src/pages/program/HakowanieProduktywnosci.tsx`

Replace lines 828-886 (the "Sam kurs to dopiero początek" section including the `ValueCalculator` reference) with `<LifehackerzySection />`. Add the import. Remove now-unused imports if any.

Note: The `ValueCalculator` component currently rendered inside the replaced section will be moved to appear right after the Lifehackerzy section (before the pricing section), preserving the value stack.

### Files affected

1. **New**: `src/components/sections/LifehackerzySection.tsx`
2. **Edit**: `src/pages/program/UwazneZycie.tsx` -- replace inline section with component
3. **Edit**: `src/pages/program/HakowanieProduktywnosci.tsx` -- replace community section with component
