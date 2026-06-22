import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-[360px]">
      <Carousel>
        <CarouselContent>
          {["Slide 1", "Slide 2", "Slide 3", "Slide 4"].map((label) => (
            <CarouselItem key={label}>
              <div className="flex h-40 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                <span className="text-xl font-semibold">{label}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
