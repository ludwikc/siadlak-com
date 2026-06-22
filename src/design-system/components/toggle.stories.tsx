import type { Meta, StoryObj } from "@storybook/react";
import { Bold } from "lucide-react";
import { Toggle } from "./toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" },
};

export const Pressed: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
    "aria-label": "Toggle bold",
    pressed: true,
  },
};

export const Unpressed: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
    "aria-label": "Toggle bold",
    pressed: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle aria-label="Default">Default</Toggle>
      <Toggle variant="outline" aria-label="Outline">
        Outline
      </Toggle>
    </div>
  ),
};
