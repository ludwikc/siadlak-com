import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { useToast } from "../lib/use-toast";

function ToastDemo() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Action completed",
          description: "Your changes have been saved successfully.",
        })
      }
    >
      Show Toast
    </Button>
  );
}

function ToastDestructiveDemo() {
  const { toast } = useToast();
  return (
    <Button
      variant="destructive"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "There was a problem with your request.",
        })
      }
    >
      Show Destructive Toast
    </Button>
  );
}

const meta = {
  title: "Components/Toast",
  component: ToastDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Destructive: Story = {
  render: () => <ToastDestructiveDemo />,
};
