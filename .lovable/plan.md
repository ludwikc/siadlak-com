

# Parametryzacja strony /mailing/mute/:topic

## Podsumowanie

Strona `/mailing/mute/:topic` będzie wyświetlać różne komunikaty w zależności od segmentu URL. Konfiguracja komunikatów w osobnym pliku. Domyślny fallback dla nieznanych parametrów.

## Zmiany

### 1. Nowy plik `src/data/mailing-mute-topics.ts`

Słownik topic → komunikat:

```ts
export const muteTopics: Record<string, { heading: string; message: string }> = {
  default: {
    heading: "OK, przyjąłem 🫡",
    message: "Nie będziesz otrzymywać treści na ten temat.",
  },
  webinar: {
    heading: "OK, przyjąłem 🫡",
    message: "Nie będziesz otrzymywać zaproszeń na webinary.",
  },
  newsletter: {
    heading: "OK, przyjąłem 🫡",
    message: "Nie będziesz otrzymywać newslettera.",
  },
};
```

Łatwo rozszerzalny — wystarczy dodać nowy klucz.

### 2. `src/pages/MailingMute.tsx`

- Odczyt parametru `topic` z `useParams()`
- Lookup w `muteTopics[topic]`, fallback na `muteTopics.default`
- Reszta layoutu bez zmian

### 3. `src/App.tsx`

- Zmiana route z `/mailing/mute` na `/mailing/mute/:topic?` (opcjonalny segment — sam `/mailing/mute` też zadziała z domyślnym komunikatem)

