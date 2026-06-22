import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Share your thoughts…" },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is a pre-filled message. It demonstrates how a textarea looks with existing content across multiple lines.",
  },
};

export const Disabled: Story = {
  args: { placeholder: "This field is disabled", disabled: true },
};
