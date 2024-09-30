import type { AppProps } from "next/app";
import { ThemeProvider } from "@/lib/chakra/ThemeProvider";
import { CookiesProvider } from "react-cookie";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default MyApp;
