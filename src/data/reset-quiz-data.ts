export const RESET_QUESTIONS = [
  "Czy przez cały dzień podejmujesz decyzje — a żadna nie daje poczucia domknięcia?",
  "Czy odkładasz ważne zadania nie dlatego, że są trudne — tylko dlatego, że jest ich za dużo naraz?",
  "Czy często zmieniasz, nadpisujesz lub porzucasz własne plany w trakcie dnia?",
  "Czy nosisz w głowie listę spraw „do zrobienia”, która nie jest nigdzie zapisana — tylko ciągle krąży?",
  "Czy wracasz myślami do tych samych niedokończonych spraw — rozmów, projektów, decyzji?",
  "Czy kończysz dzień z poczuciem, że zajęć było mnóstwo — a to, co naprawdę ważne, dalej czeka?",
  "Czy czujesz napięcie, kiedy próbujesz odpocząć — mimo zmęczenia?",
  "Czy masz wrażenie, że „ogarniasz wszystko”, ale wewnętrznie tracisz kontrolę?",
  "Czy trudno Ci delegować lub odpuścić, bo masz poczucie, że wtedy coś się posypie?",
  "Czy jest jeden temat, którego unikasz — choć wiesz, że to właśnie on najbardziej Cię blokuje?",
] as const;

export const BLOCK_INTROS: Record<number, { emoji: string; title: string; description: string }> = {
  3: {
    emoji: "🧠",
    title: "BLOK 2: OTWARTE PĘTLE",
    description: "Najwięcej energii tracisz nie na działanie, ale na rzeczy, które ciągle krążą w Twojej głowie i nie są zamknięte.",
  },
  6: {
    emoji: "⚡",
    title: "BLOK 3: UKRYTE NAPIĘCIE",
    description: "Z zewnątrz wszystko może wyglądać na ogarnięte — ale głowa i ciało działają w trybie ciągłego napięcia.",
  },
  8: {
    emoji: "🧱",
    title: "BLOK 4: TOŻSAMOŚĆ I ODPOWIEDZIALNOŚĆ",
    description: "Im więcej dźwigasz, tym trudniej odpuścić — nawet wtedy, gdy to właśnie brak odpuszczenia Cię blokuje.",
  },
};

export const ANSWER_OPTIONS = [
  { label: "Tak, często", value: 2 },
  { label: "Czasami", value: 1 },
  { label: "Rzadko / nie", value: 0 },
] as const;

export const RESULT_TIERS = [
  {
    min: 0,
    max: 6,
    emoji: "🟢",
    heading: "Relatywnie zamknięte pętle",
    description: "Masz relatywnie zamknięte pętle, ale uważaj na ukryte przeciążenie.",
    colorClass: "text-green-400",
  },
  {
    min: 7,
    max: 13,
    emoji: "🟡",
    heading: "Otwarte pętle wpływają na efektywność",
    description: "Twoje otwarte pętle zaczynają wpływać na Twoją efektywność.",
    colorClass: "text-yellow-400",
  },
  {
    min: 14,
    max: 20,
    emoji: "🔥",
    heading: "Chroniczne przeciążenie poznawcze",
    description: "Jesteś w stanie chronicznego przeciążenia poznawczego. Twój system wymaga resetu.",
    colorClass: "text-red-400",
  },
] as const;

export function getResultTier(score: number) {
  return RESULT_TIERS.find((t) => score >= t.min && score <= t.max) ?? RESULT_TIERS[2];
}
