import type { Config } from "tailwindcss";
import designSystemPreset from "./src/design-system/tailwind-preset";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}",
    "!./src/design-system/tailwind-preset.ts",
  ],
  prefix: "",
  presets: [designSystemPreset],
};

export default config;
