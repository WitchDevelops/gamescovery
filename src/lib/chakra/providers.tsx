"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { theme } from "@/lib/chakra/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider attribute="class" disableTransitionOnChange={true}>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
