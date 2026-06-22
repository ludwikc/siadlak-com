import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar";

const meta = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Courses</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Life Hacking <MenubarShortcut>⌘L</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Uważne Życie</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Bundles</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Starter Bundle</MenubarItem>
              <MenubarItem>Pro Bundle</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Community</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Discord Server</MenubarItem>
          <MenubarItem>Live Sessions</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Newsletter</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>About</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Ludwik's Story</MenubarItem>
          <MenubarItem>Press Kit</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Contact <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const Compact: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Course</MenubarItem>
          <MenubarItem>Open Draft</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
