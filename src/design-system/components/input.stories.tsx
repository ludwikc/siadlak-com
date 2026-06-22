import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter your name" },
};

export const WithValue: Story = {
  args: { defaultValue: "Ludwik Siadlak" },
};

export const Email: Story = {
  args: { type: "email", placeholder: "you@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Your password" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled input", disabled: true },
};
