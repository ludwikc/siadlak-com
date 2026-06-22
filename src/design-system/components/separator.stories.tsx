import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[360px] space-y-4">
      <div>
        <h4 className="text-sm font-medium leading-none">Life Hacking Academy</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Productivity systems for sustainable high performance.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium leading-none">Deep Focus Bootcamp</h4>
        <p className="text-sm text-muted-foreground mt-1">
          30-day programme to rebuild your concentration from scratch.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium leading-none">Morning Routine Masterclass</h4>
        <p className="text-sm text-muted-foreground mt-1">
          Design a morning that sets the tone for an exceptional day.
        </p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center space-x-4 h-6 text-sm">
      <span>Courses</span>
      <Separator orientation="vertical" />
      <span>Podcast</span>
      <Separator orientation="vertical" />
      <span>Community</span>
      <Separator orientation="vertical" />
      <span>About</span>
    </div>
  ),
};
