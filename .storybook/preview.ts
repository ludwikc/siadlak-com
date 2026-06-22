import type { Preview } from "@storybook/react";
import "./preview.css";
import "../src/design-system/styles/global.css"; // AFTER preview.css — preserves raw-CSS cascade
import { withProviders } from "./decorators";

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

export default preview;
