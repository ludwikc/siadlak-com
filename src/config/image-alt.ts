// Alt text derived from description_pl / description_en in the siadlak.pics catalog
// (/Users/ludwikc/git/siadlak.pics/catalog.yaml). Keys are image file names without extension.

export type AltLocale = "pl" | "en";

export const imageAlt = {
  "ludwikcsiadlak-portret-reka-pod-broda-spojrzenie-w-obiektyw-pion": {
    pl: "Ludwik C. Siadlak w czarnej bluzie i okularach, z ręką pod brodą, patrzy prosto w obiektyw",
    en: "Ludwik C. Siadlak in a black sweater and glasses, hand under chin, looking straight into the camera",
  },
  "ludwikcsiadlak-portret-spojrzenie-w-gore-kwadrat": {
    pl: "Ludwik C. Siadlak w czarnej koszulce i okularach patrzy w górę na ciemnym tle",
    en: "Ludwik C. Siadlak in a black t-shirt and glasses looking up against a dark background",
  },
  "grafika-platnosci-logotypy-applepay-gpay-blik-visa-mastercard-2": {
    pl: "Metody płatności: Apple Pay, Google Pay, BLIK, Przelewy24, Visa, Mastercard",
    en: "Payment methods: Apple Pay, Google Pay, BLIK, Przelewy24, Visa, Mastercard",
  },
  "ludwikcsiadlak-prezentuje-cyfre-7-mikrofon-podcast": {
    pl: "Uśmiechnięty Ludwik C. Siadlak przy mikrofonie wskazuje świecącą cyfrę 7 w neonowym kompasie",
    en: "Smiling Ludwik C. Siadlak at a studio microphone presenting a glowing number 7 in a neon compass",
  },
  "ludwikcsiadlak-kurs-7-technik-mockup-urzadzenia-wyciety-1": {
    pl: "Kurs 7 Technik Produktywności na laptopie, monitorze i smartfonie, z Ludwikiem C. Siadlakiem na ekranach",
    en: "The 7 Productivity Techniques course on a laptop, monitor and smartphone, with Ludwik C. Siadlak on screen",
  },
  "ludwikcsiadlak-kurs-7-technik-mockup-urzadzenia-wyciety-3": {
    pl: "Kurs 7 Technik Produktywności na laptopie, monitorze i smartfonie, z Ludwikiem C. Siadlakiem na ekranach",
    en: "The 7 Productivity Techniques course on a laptop, monitor and smartphone, with Ludwik C. Siadlak on screen",
  },
  "ludwikcsiadlak-stojacy-kawa-fioletowa-poswiata-wyciety": {
    pl: "Ludwik C. Siadlak w czarnym stroju stoi ze szklanką czarnej kawy w dłoni, drugą rękę trzyma w kieszeni",
    en: "Ludwik C. Siadlak in black, standing with a glass of black coffee, one hand in his pocket",
  },
  "grafika-newsletter-przyklad-naglowek-kompas": {
    pl: "Przykład newslettera Ludwika C. Siadlaka: nagłówek z logo kompasu i formułą (Mózg + Robot)^Serce",
    en: "Sample of Ludwik C. Siadlak's newsletter: header with compass logo and the (Brain + Robot)^Heart formula",
  },
  "mateusz-lizak-portret-zielona-koszula-kwadrat": {
    pl: "Mateusz Lizak w oliwkowej koszuli na tle drewnianego regału z książkami",
    en: "Mateusz Lizak in an olive-green overshirt against a wooden bookshelf",
  },
  "ludwikcsiadlak-selfie-plener-szalik-ios": {
    pl: "Selfie Ludwika C. Siadlaka w plenerze, w zimowej kurtce i szaliku",
    en: "Outdoor selfie of Ludwik C. Siadlak in a winter jacket and scarf",
  },
  "grafika-lifehackerzy-spotkanie-spolecznosci-video-call": {
    pl: "Wideorozmowa społeczności Lifehackerzy: siatka uczestników z Ludwikiem C. Siadlakiem",
    en: "Lifehackerzy community video call: a grid of members with Ludwik C. Siadlak",
  },
  "ludwikcsiadlak-prezentacja-google-campus-hacker-umyslow-krawat-szeroki": {
    pl: "Ludwik C. Siadlak w białej koszuli i krawacie przemawia na scenie Google Campus Warsaw, na ekranie napis „Hacker umysłów”",
    en: "Ludwik C. Siadlak in a white shirt and tie speaking on stage at Google Campus Warsaw, the screen reads “Hacker umysłów”",
  },
  "ludwikcsiadlak-portret-medytacja-po-turecku-smuga-swiatla-16x9": {
    pl: "Ludwik C. Siadlak medytuje po turecku w ciemnym pokoju, oświetlony smugą słońca",
    en: "Ludwik C. Siadlak meditating cross-legged in a dark room, lit by a ray of sunlight",
  },
  "grafika-medytacje-drzewo-zycia-mandala-neon-kwadrat": {
    pl: "Okładka podcastu Uważne Życie: neonowa postać w medytacji zrośnięta z Drzewem Życia",
    en: "Uważne Życie podcast cover: a neon meditating figure merged with the Tree of Life",
  },
  "ludwikcsiadlak-podcast-life-hacking-okladka-kwadrat": {
    pl: "Okładka podcastu Life Hacking: czarno-biały portret Ludwika C. Siadlaka opartego o sofę",
    en: "Life Hacking Podcast cover: black-and-white portrait of Ludwik C. Siadlak leaning on a sofa",
  },
  "ludwikcsiadlak-lifestyle-instagram-siatka-6-zdjec": {
    pl: "Sześć ujęć z życia Ludwika C. Siadlaka: szlifowanie metalu, motocykl na torze, medytacja w lesie, podróże, joga i gitara z dzieckiem",
    en: "Six photos from Ludwik C. Siadlak's life: metal grinding, track motorcycling, forest meditation, travel, yoga and guitar with a child",
  },
} as const satisfies Record<string, Record<AltLocale, string>>;

export type ImageAltKey = keyof typeof imageAlt;

export const altFor = (key: ImageAltKey, locale: AltLocale = "pl"): string => imageAlt[key][locale];
