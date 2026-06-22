import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="full-name">Full name</Label>
      <Input id="full-name" placeholder="Jane Kowalska" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email-required">
        Email address <span className="text-destructive">*</span>
      </Label>
      <Input id="email-required" type="email" placeholder="jane@example.com" />
    </div>
  ),
};

export const WithDisabledInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="disabled-field">Account ID (read-only)</Label>
      <Input id="disabled-field" defaultValue="usr_01HXYZ" disabled />
    </div>
  ),
};
