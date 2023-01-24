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
  components: {
    Link: {
      variants: {
        'mdx-link': (props) => ({
          color: props.colorMode === "light" ? "blue.400":"blue.200"
        })
      }
    }
  },
  fonts: {
    heading: `'Satoshi Variable', sans-serif`,
    body: `'Satoshi Variable', sans-serif`,
  },
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("blue.50", "rgb(39 39 42)")(props),
      },
    }),
  },
  
});
