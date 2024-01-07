import { ColorModeScript, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" style={{ height: "100%" }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
          <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,600;0,700;0,900;1,500&display=swap" rel="stylesheet"/>

        </Head>
        <body style={{ fontFamily: "Jost", display: "flex", flexDirection: "column", minHeight: "100%" }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
