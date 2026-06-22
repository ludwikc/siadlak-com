import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/design-system/index.ts" },
  outDir: "src/design-system/dist",
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom"],
  tsconfig: "tsconfig.ds.json",
});
