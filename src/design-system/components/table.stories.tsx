import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const enrollments = [
  { name: "Anna Kowalska", course: "Life Hacking Academy", date: "2024-11-03", status: "Active" },
  { name: "Piotr Nowak", course: "Deep Focus Bootcamp", date: "2024-12-15", status: "Active" },
  { name: "Marta Wiśniewska", course: "Morning Routine Masterclass", date: "2025-01-08", status: "Completed" },
  { name: "Tomasz Zając", course: "Life Hacking Academy", date: "2025-02-20", status: "Paused" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Recent course enrollments</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Enrolled</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {enrollments.map((row) => (
          <TableRow key={row.name}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.course}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
