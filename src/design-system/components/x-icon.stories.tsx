import type { Meta, StoryObj } from "@storybook/react";
import XIcon from "./x-icon";

const meta = {
  title: "Brand/XIcon",
  component: XIcon,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "range", min: 12, max: 64, step: 4 } },
  },
} satisfies Meta<typeof XIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 20,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6 p-4">
      {([12, 16, 20, 24, 32, 48] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <XIcon size={size} />
          <span className="text-xs text-muted-foreground">{size}px</span>
        </div>
      ))}
    </div>
  ),
};

export const WithColor: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <XIcon size={24} className="text-foreground" />
      <XIcon size={24} className="text-muted-foreground" />
      <XIcon size={24} className="text-electric" />
      <div className="bg-depth p-2 rounded">
        <XIcon size={24} className="text-white" />
      </div>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4">
      <a
        href="https://x.com/ludwikc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Ludwik na X"
      >
        <XIcon size={16} />
        <span>@ludwikc</span>
      </a>
    </div>
  ),
};
