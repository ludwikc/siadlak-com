import type { Meta, StoryObj } from "@storybook/react";
import { GlassCard } from "./glass-card";

const meta = {
  title: "Brand/GlassCard",
  component: GlassCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "subtle"],
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    hover: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="bg-void-glow p-10 min-h-[300px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    padding: "md",
    children: (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-2">Kurs: Produktywność 2.0</h3>
        <p className="text-white/70">
          Naucz się zarządzać czasem i energią tak, by osiągać więcej przy mniejszym wysiłku.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="bg-void-glow p-10 flex flex-col gap-6">
      <GlassCard variant="default" padding="md">
        <h3 className="text-white font-bold text-lg mb-1">Default</h3>
        <p className="text-white/70 text-sm">Standardowa karta szklana — tło z rozmyciem.</p>
      </GlassCard>
      <GlassCard variant="bordered" padding="md">
        <h3 className="text-white font-bold text-lg mb-1">Bordered</h3>
        <p className="text-white/70 text-sm">Karta z wyraźną białą obramówką dla większego kontrastu.</p>
      </GlassCard>
      <GlassCard variant="subtle" padding="md">
        <h3 className="text-white font-bold text-lg mb-1">Subtle</h3>
        <p className="text-white/70 text-sm">Delikatna karta z minimalnym tłem — dyskretna i elegancka.</p>
      </GlassCard>
    </div>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <div className="bg-void-glow p-10 flex flex-wrap gap-4 items-start">
      {(["sm", "md", "lg", "xl"] as const).map((p) => (
        <GlassCard key={p} padding={p} variant="bordered">
          <span className="text-white font-semibold">padding: {p}</span>
        </GlassCard>
      ))}
    </div>
  ),
};

export const WithContent: Story = {
  args: {
    variant: "bordered",
    padding: "lg",
    children: (
      <div className="text-white space-y-3">
        <p className="text-electric text-xs font-bold uppercase tracking-widest">Webinar</p>
        <h2 className="text-2xl font-bold">Jak zbudować nawyki, które naprawdę działają</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Podczas tego webinaru odkryjesz sprawdzone metody tworzenia trwałych nawyków
          opartych na neurobiologii i psychologii behawioralnej.
        </p>
        <div className="flex gap-3 pt-2">
          <span className="text-xs bg-electric/20 text-electric px-3 py-1 rounded-full">
            45 minut
          </span>
          <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
            Bezpłatnie
          </span>
        </div>
      </div>
    ),
  },
};
