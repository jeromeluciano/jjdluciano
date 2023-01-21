import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import FooterSection from "../footer-section";
import Navbar from "../navbar";


export default function Layout({ children }) {
  const theme = useColorModeValue("no-dots", "with-dots");

  useEffect(() => {
    if (theme == "with-dots") {
      console.log(theme);
      document.body.style.backgroundImage = "radial-gradient(#4b5563 1px, transparent 1px)";
      document.body.style.backgroundSize = "60px 60px";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
    }
  }, [theme]);

  return (
    <Container >
      <Navbar />
      <Box mx={{ sm: "4" }}>{children}</Box>
      <FooterSection />
    </Container>
  );
}
