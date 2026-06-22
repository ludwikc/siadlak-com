import * as React from "react";
import { TooltipProvider } from "../src/design-system/components/tooltip";
import { Toaster } from "../src/design-system/components/toaster";
import { Toaster as SonnerToaster } from "../src/design-system/components/sonner";

export function withProviders(Story: React.ComponentType) {
  return (
    <TooltipProvider>
      <Story />
      <Toaster />
      <SonnerToaster />
    </TooltipProvider>
  );
}
