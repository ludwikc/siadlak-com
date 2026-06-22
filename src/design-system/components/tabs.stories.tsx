import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[480px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        <h3 className="font-semibold mb-2">Course Overview</h3>
        <p className="text-sm text-muted-foreground">
          This course covers productivity frameworks, deep work strategies, and
          habits that help you get more done in less time without burning out.
        </p>
      </TabsContent>
      <TabsContent value="curriculum" className="p-4">
        <h3 className="font-semibold mb-2">Curriculum</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
          <li>Module 1: The productivity mindset</li>
          <li>Module 2: Time-blocking and batching</li>
          <li>Module 3: Deep work sessions</li>
          <li>Module 4: Weekly reviews</li>
        </ul>
      </TabsContent>
      <TabsContent value="reviews" className="p-4">
        <h3 className="font-semibold mb-2">Student Reviews</h3>
        <p className="text-sm text-muted-foreground">
          ★★★★★ &ldquo;Changed how I approach my mornings completely.&rdquo; — Karolina M.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[360px]">
      <TabsList>
        <TabsTrigger value="active">Active Courses</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">You have 2 courses in progress.</p>
      </TabsContent>
      <TabsContent value="completed" className="p-4">
        <p className="text-sm text-muted-foreground">You have completed 5 courses.</p>
      </TabsContent>
    </Tabs>
  ),
};
