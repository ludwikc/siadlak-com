import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Button } from "./button";

function SonnerDemo() {
  return (
    <Button onClick={() => toast("Event has been created")}>Show Sonner</Button>
  );
}

function SonnerWithDescriptionDemo() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    >
      Show with Description
    </Button>
  );
}

const meta = {
  title: "Components/Sonner",
  component: SonnerDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SonnerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SonnerDemo />,
};

export const WithDescription: Story = {
  render: () => <SonnerWithDescriptionDemo />,
};
