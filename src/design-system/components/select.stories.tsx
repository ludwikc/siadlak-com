import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-56">
      <Select defaultValue="poland">
        <SelectTrigger>
          <SelectValue placeholder="Choose a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="poland">Poland</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <div className="w-56">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a timezone…" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="utc">UTC</SelectItem>
          <SelectItem value="cet">CET (Central European Time)</SelectItem>
          <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
          <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-56">
      <Select disabled defaultValue="pro">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise">Enterprise</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
