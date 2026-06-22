import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard defaultOpen>
      <HoverCardTrigger asChild>
        <a
          className="text-sm font-medium underline underline-offset-4 cursor-pointer"
          href="#"
        >
          Ludwik C. Siadlak
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
              LS
            </div>
            <div>
              <p className="font-semibold text-sm">Ludwik C. Siadlak</p>
              <p className="text-xs text-muted-foreground">Coach & Author</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Helping entrepreneurs build systems that create freedom — not just
            more work.
          </p>
          <p className="text-xs text-muted-foreground">
            10+ years · 2,400+ students
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CourseCard: Story = {
  render: () => (
    <HoverCard defaultOpen>
      <HoverCardTrigger asChild>
        <span className="text-sm underline underline-offset-4 cursor-pointer">
          Life Hacking Course
        </span>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <div className="space-y-2">
          <p className="font-semibold text-sm">Life Hacking: System Edition</p>
          <p className="text-sm text-muted-foreground">
            A 6-week intensive to design your productivity system from the
            ground up.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>6 modules</span>
            <span>·</span>
            <span>24 lessons</span>
            <span>·</span>
            <span>Self-paced</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
