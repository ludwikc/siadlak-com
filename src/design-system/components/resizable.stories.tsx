import type { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./resizable";

const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 600, height: 300 }}>
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel defaultSize={35}>
          <div className="flex flex-col h-full p-4">
            <h4 className="text-sm font-semibold mb-3">Course Modules</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="font-medium text-foreground">1. The Productivity Mindset</li>
              <li>2. Time-Blocking & Batching</li>
              <li>3. Deep Work Sessions</li>
              <li>4. Weekly Reviews</li>
            </ul>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65}>
          <div className="flex flex-col h-full p-4">
            <h4 className="text-sm font-semibold mb-2">The Productivity Mindset</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Before diving into tactics, we establish the foundations: understanding
              why most productivity advice fails and how to build a system that fits
              your life. You&apos;ll audit your current habits and identify the three
              highest-leverage changes you can make immediately.
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ width: 480, height: 320 }}>
      <ResizablePanelGroup direction="vertical" className="rounded-lg border">
        <ResizablePanel defaultSize={40}>
          <div className="flex flex-col h-full p-4">
            <h4 className="text-sm font-semibold mb-2">Lesson Notes</h4>
            <p className="text-sm text-muted-foreground">
              Your personal notes for this lesson appear here.
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex flex-col h-full p-4">
            <h4 className="text-sm font-semibold mb-2">Discussion</h4>
            <p className="text-sm text-muted-foreground">
              Community comments and questions for this lesson.
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
