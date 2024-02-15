import { Box, Container, HStack, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaViber } from "react-icons/fa";
import useIconColor from "../hooks/useIconColor";
import useTextColor from "../hooks/useTextColor";
import Section from "./section";
import SpotifyWidget from "./spotify-widget";
import SpotifyWidgetLink from "./spotify-widget-link";
import FeaturedCard from "./featured-card";

export default function FooterSection() {
  const textColor = useTextColor();
  const iconColor = useIconColor();

  const router = useRouter();



  return (
    <Section delay={1.9} as="footer" className="footer">
      <Stack spacing={4} py={4} pb={8} marginTop="auto">
        <Container maxW="container.md" px={4}> 

          <HStack direction="column" justifyContent="space-between" px={4} >
            <SpotifyWidget />

            <Text textAlign="center" color={textColor} fontSize="xs">
              &copy; {new Date().getFullYear()} John Jerome D. Luciano
            </Text>


            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mb="2"
              spacing={4}
            >
              <SpotifyWidgetLink />

              <a href="https://www.facebook.com/jjdluciano">
                <Box>
                  <FaFacebook size={18} className="text-yellow-50/90" />
                </Box>
              </a>
              <a href="https://www.linkedin.com/in/john-jerome-luciano-a65490233/">
                <Box>
                  <FaLinkedin size={18} className="text-yellow-50/90" />
                </Box>
              </a>
              <a href="https://github.com/jeromeluciano">
                <Box>
                  <FaGithub size={18} className="text-yellow-50/90" />
                </Box>
              </a>
              <a href="https://msng.link/o/?639156969987=vi">
                <Box>
                  <FaViber size={18} className="text-yellow-50/90"/>
                </Box>
              </a>
            </Stack>
           
          </HStack>
        </Container>

      </Stack>
    </Section>
  );
}
