import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import { Label } from "./label";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="notifications-off" />
        <Label htmlFor="notifications-off">Push notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="dark-mode" defaultChecked />
        <Label htmlFor="dark-mode">Dark mode</Label>
      </div>
    </div>
  ),
};

export const Off: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="switch-off" />
      <Label htmlFor="switch-off">Email digest</Label>
    </div>
  ),
};

export const On: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="switch-on" defaultChecked />
      <Label htmlFor="switch-on">Show activity status</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Feature unavailable</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="disabled-on" defaultChecked disabled />
        <Label htmlFor="disabled-on">Managed by admin</Label>
      </div>
    </div>
  ),
};
