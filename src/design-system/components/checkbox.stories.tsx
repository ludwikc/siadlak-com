import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
    </div>
  ),
};

export const Unchecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="unchecked" />
      <Label htmlFor="unchecked">Opt in to marketing emails</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Remember this device</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Unavailable option</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" defaultChecked disabled />
        <Label htmlFor="disabled-checked">Locked preference</Label>
      </div>
    </div>
  ),
};
