import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";

const navItems = [
  { title: "Dashboard", href: "#" },
  { title: "Projects", href: "#" },
  { title: "Team", href: "#" },
  { title: "Settings", href: "#" },
];

function SidebarDemo() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1">
              <span className="font-semibold text-sidebar-foreground">
                My App
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex flex-1 flex-col p-6">
          <SidebarTrigger className="mb-4" />
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="mt-2 text-muted-foreground">
            Use the trigger button or Ctrl+B to toggle the sidebar.
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
}

const meta = {
  title: "Components/Sidebar",
  component: SidebarProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SidebarDemo />,
};
