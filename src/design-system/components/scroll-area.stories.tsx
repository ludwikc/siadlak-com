import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const episodes = [
  { ep: 142, title: "How to build an evening routine that actually sticks" },
  { ep: 141, title: "The 90-minute work block framework" },
  { ep: 140, title: "Why multitasking is killing your creativity" },
  { ep: 139, title: "Digital minimalism in practice" },
  { ep: 138, title: "Designing your ideal week" },
  { ep: 137, title: "The science of habit stacking" },
  { ep: 136, title: "How to do a proper weekly review" },
  { ep: 135, title: "Energy management vs. time management" },
  { ep: 134, title: "Dealing with decision fatigue" },
  { ep: 133, title: "Building a second brain with notes" },
];

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[280px] w-[360px] rounded-md border p-4">
      <h4 className="text-sm font-semibold mb-3">Life Hacking Podcast — Episodes</h4>
      <div className="space-y-3">
        {episodes.map((ep) => (
          <div key={ep.ep} className="text-sm">
            <span className="text-muted-foreground mr-2">#{ep.ep}</span>
            {ep.title}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
