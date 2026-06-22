import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="monthly">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="plan-monthly" />
        <Label htmlFor="plan-monthly">Monthly billing</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="annual" id="plan-annual" />
        <Label htmlFor="plan-annual">Annual billing (save 20%)</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="lifetime" id="plan-lifetime" />
        <Label htmlFor="plan-lifetime">Lifetime access</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="beginner" className="flex flex-row gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="beginner" id="level-beginner" />
        <Label htmlFor="level-beginner">Beginner</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="intermediate" id="level-intermediate" />
        <Label htmlFor="level-intermediate">Intermediate</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="advanced" id="level-advanced" />
        <Label htmlFor="level-advanced">Advanced</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-a">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-a" id="opt-a" />
        <Label htmlFor="opt-a">Option A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-b" id="opt-b" disabled />
        <Label htmlFor="opt-b">Option B (unavailable)</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-c" id="opt-c" />
        <Label htmlFor="opt-c">Option C</Label>
      </div>
    </RadioGroup>
  ),
};
