import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fontsource/jetbrains-mono";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { theme } from "../styles/theme";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/MDXComponents";
import Fonts from "../styles/Fonts";
import { ImageModalProvider } from "../contexts/image-context";
import { Analytics } from '@vercel/analytics/react'


function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ImageModalProvider>
          <Component {...pageProps} />
          <Analytics />
        </ImageModalProvider>
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;

