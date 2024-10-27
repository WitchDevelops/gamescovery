import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config: config,
  colors: {
    gray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
    brand: {
      50: "#dafff9",
      100: "#adffec",
      200: "#7effdf",
      300: "#4dffd2",
      400: "#24ffc6",
      500: "#12e6ac",
      600: "#00b386",
      700: "#008060",
      800: "#004e38",
      900: "#001c12",
    },
  },
});
