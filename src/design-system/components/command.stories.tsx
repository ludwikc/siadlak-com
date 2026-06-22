import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "./command";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[360px]">
      <CommandInput placeholder="Search courses, lessons, topics…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Courses">
          <CommandItem>Life Hacking Academy</CommandItem>
          <CommandItem>Deep Focus Bootcamp</CommandItem>
          <CommandItem>Morning Routine Masterclass</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Podcasts">
          <CommandItem>Life Hacking — Episode 142</CommandItem>
          <CommandItem>Uważne Życie — Episode 38</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pages">
          <CommandItem>About Ludwik</CommandItem>
          <CommandItem>Community</CommandItem>
          <CommandItem>Contact</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
