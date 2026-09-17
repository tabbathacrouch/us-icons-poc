"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/theme/global-styles";
import { theme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
