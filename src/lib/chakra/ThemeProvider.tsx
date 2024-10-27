"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/lib/chakra/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(["chakra-ui-color-mode"]);

  useEffect(() => {
    const colorMode = cookies["chakra-ui-color-mode"];
    if (colorMode) {
      document.documentElement.setAttribute("data-theme", colorMode);
    }
  }, [cookies]);

  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={{
          type: "cookie",
          get: () => cookies["chakra-ui-color-mode"],
          set: (value) => {
            setCookie("chakra-ui-color-mode", value, { path: "/" });
          },
        }}
        theme={theme}
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
