import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import AppCard from "./app-card";

const meta = {
  title: "Brand/AppCard",
  component: AppCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="max-w-sm">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Fokus 90",
    subtitle: "System głębokiej pracy",
    description:
      "Przetestowany system pracy w blokach 90-minutowych oparty na cyklach ultradiańskich. Zwiększ koncentrację i skończ z wiecznym rozproszeniem.",
    category: "Produktywność",
    rating: 4.8,
    downloads: "12 400",
    status: "POLECANE",
    features: [
      "Gotowe szablony sesji focusowych",
      "Śledzenie energii i koncentracji",
      "Integracja z kalendarzem Google",
    ],
    link: "/kursy/fokus-90",
    duration: "8 tygodni",
    target: "Pracownicy wiedzy",
  },
};

export const Featured: Story = {
  args: {
    title: "Odporny Umysł",
    subtitle: "Kurs odporności psychicznej",
    description:
      "Naucz się zarządzać stresem, presją i niepewnością. 12-tygodniowy program oparty na stoicyzmie i współczesnej psychologii.",
    category: "Odporność psychiczna",
    rating: 4.9,
    downloads: "8 750",
    status: "POLECANE",
    features: [
      "Techniki regulacji emocjonalnej",
      "Ćwiczenia stoickie na każdy dzień",
      "Grupowe sesje wsparcia online",
    ],
    link: "/kursy/odporny-umysl",
    duration: "12 tygodni",
    target: "Liderzy i menedżerowie",
    featured: true,
  },
};

export const Premium: Story = {
  args: {
    title: "Alfa Leadership",
    subtitle: "Przywództwo i wpływ",
    description:
      "Ekskluzywny program dla mężczyzn budujących autorytet i wpływ w rodzinie, pracy i społeczności. Mentoring, live Q&A i lifetime access.",
    category: "Męskość",
    rating: 5.0,
    downloads: "3 200",
    status: "DOSTĘPNA",
    features: [
      "Miesięczne live Q&A z Ludwikiem",
      "Prywatna społeczność Alfa Brotherhood",
      "Dostęp dożywotni do materiałów",
    ],
    link: "/kursy/alfa-leadership",
    duration: "6 miesięcy",
    target: "Ambitni mężczyźni 30–50 lat",
    premium: true,
  },
};

export const Unavailable: Story = {
  args: {
    title: "Deep Work Masterclass",
    subtitle: "Praca głęboka bez kompromisów",
    description:
      "Intensywny 4-tygodniowy sprint dla osób chcących wyeliminować płytką pracę i osiągnąć stan flow na żądanie. Kolejna edycja wkrótce.",
    category: "Produktywność",
    rating: 4.7,
    downloads: "5 600",
    status: "NIEDOSTĘPNA",
    features: [
      "Protokół eliminacji dystrakcji cyfrowych",
      "System planowania tygodniowego",
      "Nagrania archiwalne z poprzednich edycji",
    ],
    link: "/kursy/deep-work",
    duration: "4 tygodnie",
    target: "Freelancerzy i soloprzedsiębiorcy",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {(["NOWA", "POLECANE", "DOSTĘPNA", "NIEDOSTĘPNA"] as const).map((status) => (
        <AppCard
          key={status}
          title="Przykładowy kurs"
          subtitle="Podtytuł kursu"
          description="Krótki opis kursu pokazujący jak wygląda dany status na karcie aplikacji."
          category="Produktywność"
          rating={4.5}
          downloads="2 000"
          status={status}
          features={["Funkcja pierwsza", "Funkcja druga", "Funkcja trzecia"]}
          link="/kursy/przykladowy"
        />
      ))}
    </div>
  ),
};
