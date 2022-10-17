import { Box, Container } from "@chakra-ui/react";
import FooterSection from "../footer-section";
import Navbar from "../navbar";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Box mx={{ sm: "4" }}>{children}</Box>
      <FooterSection />
    </Container>
  );
}
