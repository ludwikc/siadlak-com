import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart";

const chartData = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 421 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-64 w-96">
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ChartDemo />,
};
