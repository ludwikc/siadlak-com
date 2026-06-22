import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const meta = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[320px]">
              <li>
                <NavigationMenuLink
                  href="#"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="font-medium mb-1">Life Hacking Academy</div>
                  <p className="text-sm text-muted-foreground">
                    Master productivity systems that adapt to your lifestyle.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="#"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="font-medium mb-1">Deep Focus Bootcamp</div>
                  <p className="text-sm text-muted-foreground">
                    Build unbreakable concentration habits in 30 days.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[280px]">
              <li>
                <NavigationMenuLink
                  href="#"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="font-medium mb-1">Discord Server</div>
                  <p className="text-sm text-muted-foreground">
                    Join 3 000+ learners in our active community.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  href="#"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="font-medium mb-1">Weekly Webinars</div>
                  <p className="text-sm text-muted-foreground">
                    Live sessions every Tuesday at 19:00 CET.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Podcast
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
