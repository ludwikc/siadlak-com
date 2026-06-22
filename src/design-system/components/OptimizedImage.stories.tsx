import type { Meta, StoryObj } from "@storybook/react";
import OptimizedImage from "./OptimizedImage";

// Small 1×1 transparent PNG as a data URI — avoids any network or build dependency
const PLACEHOLDER_SRC =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const meta = {
  title: "Brand/OptimizedImage",
  component: OptimizedImage,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    priority: { control: "boolean" },
  },
} satisfies Meta<typeof OptimizedImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: PLACEHOLDER_SRC,
    alt: "Przykładowy obraz",
    width: 400,
    height: 300,
    className: "rounded-lg object-cover",
  },
};

export const PublicAsset: Story = {
  args: {
    src: "/placeholder.svg",
    alt: "Placeholder SVG z katalogu public",
    width: 200,
    height: 200,
    className: "rounded-md",
  },
};

export const Avatar: Story = {
  args: {
    src: "/ludwikc.svg",
    alt: "Ludwik C. Siadlak",
    width: 80,
    height: 80,
    priority: true,
    className: "rounded-full",
  },
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6 p-4">
      {[64, 128, 256].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <OptimizedImage
            src="/placeholder.svg"
            alt={`Rozmiar ${size}px`}
            width={size}
            height={size}
            className="rounded border border-muted"
          />
          <span className="text-xs text-muted-foreground">{size}×{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const LazyVsEager: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      <div className="flex flex-col items-center gap-2">
        <OptimizedImage
          src="/placeholder.svg"
          alt="Ładowanie leniwe"
          width={120}
          height={120}
          priority={false}
          className="rounded-md"
        />
        <span className="text-xs text-muted-foreground">lazy (domyślnie)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <OptimizedImage
          src="/placeholder.svg"
          alt="Ładowanie priorytetowe"
          width={120}
          height={120}
          priority={true}
          className="rounded-md"
        />
        <span className="text-xs text-muted-foreground">priority / eager</span>
      </div>
    </div>
  ),
};
