import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Life Hacking: System Edition</CardTitle>
        <CardDescription>
          Zbuduj system, który pracuje za Ciebie — krok po kroku.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          12 modułów wideo, szablony i cotygodniowe wyzwania. Dołącz do ponad
          3000 osób, które już zmieniły swoje nawyki.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Więcej</Button>
        <Button>Dołącz teraz</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent className="pt-6">
        <p className="text-sm">
          Prosta karta z samą zawartością — bez nagłówka i stopki.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Stat: Story = {
  render: () => (
    <Card className="w-60">
      <CardHeader className="pb-2">
        <CardDescription>Ukończone moduły</CardDescription>
        <CardTitle className="text-4xl">8 / 12</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">+2 w tym tygodniu</p>
      </CardContent>
    </Card>
  ),
};
