import type { Meta, StoryObj } from "@storybook/react";
import { CTAButton } from "./cta-button";

const meta = {
  title: "Brand/CTAButton",
  component: CTAButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["default", "lg"],
    },
    showArrow: { control: "boolean" },
  },
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Zacznij teraz",
    variant: "primary",
    size: "lg",
    showArrow: true,
  },
};

export const Variants: Story = {
  args: { children: "Zacznij teraz" },
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <CTAButton variant="primary">Dołącz do kursu</CTAButton>
      <CTAButton variant="secondary">Dowiedz się więcej</CTAButton>
      <CTAButton variant="tertiary">Zobacz szczegóły</CTAButton>
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: "Zacznij teraz" },
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <CTAButton size="default">Zacznij teraz</CTAButton>
      <CTAButton size="lg">Zacznij teraz</CTAButton>
    </div>
  ),
};

export const WithArrow: Story = {
  args: {
    children: "Przejdź do kursu",
    variant: "primary",
    size: "lg",
    showArrow: true,
  },
};

export const WithoutArrow: Story = {
  args: {
    children: "Sprawdź program",
    variant: "secondary",
    size: "lg",
    showArrow: false,
  },
};

export const AsLink: Story = {
  args: {
    children: "Zapisz się na webinar",
    variant: "primary",
    size: "lg",
    showArrow: true,
    href: "https://siadlak.com/webinar",
  },
};
