import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a Discovery Call</DialogTitle>
          <DialogDescription>
            Choose a time that works for you and let's explore how we can work
            together to accelerate your growth.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          During this 30-minute call we'll discuss your current challenges,
          goals, and whether our coaching programme is the right fit for you.
        </p>
        <DialogFooter>
          <Button variant="outline">Maybe later</Button>
          <Button>Schedule now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel subscription?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. You will lose access to all premium
            content and your progress will not be saved.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Keep subscription</Button>
          <Button variant="destructive">Yes, cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
