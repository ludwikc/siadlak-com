import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Slider defaultValue={[40]} min={0} max={100} step={1} />
    </div>
  ),
};

export const FullRange: Story = {
  render: () => (
    <div className="w-72 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Volume: 70%</span>
        <Slider defaultValue={[70]} min={0} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Brightness: 30%</span>
        <Slider defaultValue={[30]} min={0} max={100} step={1} />
      </div>
    </div>
  ),
};

export const Stepped: Story = {
  render: () => (
    <div className="w-72 flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">
        Session length: 25 min
      </span>
      <Slider defaultValue={[25]} min={5} max={60} step={5} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <Slider defaultValue={[40]} min={0} max={100} step={1} disabled />
    </div>
  ),
};
