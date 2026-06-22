import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-[480px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>How long do I have access to the course?</AccordionTrigger>
        <AccordionContent>
          You get lifetime access to the course material, including all future updates.
          Once enrolled, you can revisit any lesson at your own pace, on any device.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is there a money-back guarantee?</AccordionTrigger>
        <AccordionContent>
          Yes. We offer a 30-day no-questions-asked refund policy. If you feel the course
          isn&apos;t right for you, simply email us within 30 days of purchase and we&apos;ll issue
          a full refund.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do I need any prior experience?</AccordionTrigger>
        <AccordionContent>
          No prior experience is required. The course is designed for anyone who wants
          to improve their productivity and build better daily habits, regardless of
          their background or current skill level.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AllCollapsed: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[480px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What topics are covered in the program?</AccordionTrigger>
        <AccordionContent>
          The program covers time management, deep work, goal-setting, habit formation,
          and personal energy management across eight structured modules.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I access the course on mobile?</AccordionTrigger>
        <AccordionContent>
          Absolutely. The course platform is fully responsive and works on smartphones,
          tablets, and desktop computers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Will I receive a certificate upon completion?</AccordionTrigger>
        <AccordionContent>
          Yes, you will receive a digital certificate of completion that you can share
          on LinkedIn or include in your portfolio.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
