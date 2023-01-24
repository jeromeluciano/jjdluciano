import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fontsource/jetbrains-mono";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./MDXComponents";
import Fonts from "../styles/Fonts";


function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <ChakraProvider theme={theme}>
        <Fonts />
          <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;

