

# Header Dropdown Update

## What Changes

Update the dropdown menu structure in `src/components/layout/Header.tsx` to match the new hierarchy:

**New dropdown structure:**
1. **Zacznij tutaj →** (`/start`) — highlighted at top, separated by divider
2. Aplikacje Mentalne (`/program`) — desc: "Kursy i szkolenia"
3. Praca 1:1 (`/program/lifeos-system-upgrade`) — desc: "Mentoring"
4. Setki Opinii Klientów (`/testimonials`) — no desc
5. Moja historia (`/about`) — no desc — **new item**
6. Kontakt (`/contact`) — no desc
7. Divider
8. **Wszystkie możliwości →** (`/start`) — footer link (already exists)

## Implementation

### Single file: `src/components/layout/Header.tsx`

**1. Update `dropdownItems` array** (lines 6-11):
- Reorder items, add `/about` entry with label "Moja historia", add `desc: "Mentoring"` to Praca 1:1
- Remove Kontakt from this array (it stays but moves after the new item)

**2. Update desktop dropdown** (lines 69-91):
- Add "Zacznij tutaj →" as a highlighted link at the top before the items, with a divider below it
- Render the updated items list
- Keep "Wszystkie możliwości →" footer as-is

**3. Update mobile menu** (lines 113-142):
- Mirror the same structure: "Zacznij tutaj →" at top of the "Pracuj ze mną" section, then items, then footer link

No new files, no new imports needed.

