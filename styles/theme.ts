import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Roboto Mono', monospace`,
    body: `'Roboto Mono', monospace`,
  },
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("rgb(244 244 245)", "rgb(39 39 42)")(props),
      },
    }),
  },
});
