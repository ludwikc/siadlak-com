import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Open info</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Programme details</h4>
          <p className="text-sm text-muted-foreground">
            12-week live coaching with weekly calls, async feedback, and access
            to the full resource library.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button>Quick enrol</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-3">
          <h4 className="font-medium">Reserve your spot</h4>
          <p className="text-sm text-muted-foreground">
            Enter your email and we'll send you the next steps.
          </p>
          <input
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder="you@example.com"
            type="email"
          />
          <Button className="w-full" size="sm">
            Send me the details
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
