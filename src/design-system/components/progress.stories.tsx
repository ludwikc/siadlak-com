import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60, className: "w-80" },
};

export const Values: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">0%</span>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">60%</span>
        <Progress value={60} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">100%</span>
        <Progress value={100} />
      </div>
    </div>
  ),
};
