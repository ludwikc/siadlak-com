import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./sheet";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet defaultOpen>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Your Learning Path</SheetTitle>
          <SheetDescription>
            Track your progress and navigate between modules in your current
            course.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-3">
          <div className="rounded-md border p-3 text-sm">
            <p className="font-medium">Module 1: Foundations</p>
            <p className="text-muted-foreground">Completed · 3 lessons</p>
          </div>
          <div className="rounded-md border bg-accent p-3 text-sm">
            <p className="font-medium">Module 2: Deep Work</p>
            <p className="text-muted-foreground">In progress · 2 / 5 lessons</p>
          </div>
          <div className="rounded-md border p-3 text-sm">
            <p className="font-medium">Module 3: Systems Thinking</p>
            <p className="text-muted-foreground">Locked</p>
          </div>
        </div>
        <SheetFooter className="mt-8">
          <Button className="w-full">Continue learning</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet defaultOpen>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Jump to any section of the platform.
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2 text-sm">
          <a className="rounded px-3 py-2 hover:bg-accent" href="#">Dashboard</a>
          <a className="rounded px-3 py-2 hover:bg-accent" href="#">My Courses</a>
          <a className="rounded px-3 py-2 hover:bg-accent" href="#">Community</a>
          <a className="rounded px-3 py-2 hover:bg-accent" href="#">Settings</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
};
