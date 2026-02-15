

# Naprawa błędów TypeScript w seo-config.ts

## Problem

W `seo-config.ts` używane są typy `"event"` i `"tool"` dla pola `type`, ale `SEOProps` w `SEO.tsx` dopuszcza tylko `"website" | "article" | "course" | "podcast"`.

## Rozwiązanie

Rozszerzyć unię typów w `SEOProps.type` w pliku `src/components/SEO.tsx`:

```typescript
type?: 'website' | 'article' | 'course' | 'podcast' | 'event' | 'tool';
```

## Plik do edycji

- `src/components/SEO.tsx` — linia z definicją `type` w interfejsie `SEOProps`

