import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import useBGColor from "../../hooks/useBGColor";
import FooterSection from "../footer-section";
import Navbar from "../navbar";


export default function Layout({ children }) {
  const theme = useColorModeValue("light-dots", "dark-dots");
  const bgColor = useBGColor();

  // useEffect(() => {
  //   if (theme == "dark-dots") {
  //     document.body.style.backgroundImage = "radial-gradient(#4b5563 .6px, transparent 1px)";
  //     document.body.style.backgroundSize = "60px 60px";
  //   } else {
  //     document.body.style.backgroundImage = "radial-gradient(#93c5fd 1px, transparent 1px)";
  //     document.body.style.backgroundSize = "60px 60px";
  //   }
  // }, [theme]);

  return (
    <>
    <Container minH="100%" maxW="container.lg" bgColor={bgColor}>
      <Navbar />
      <Box mx={{ sm: "4" }}>{children}</Box>
    </Container>
    </>
  );
}
