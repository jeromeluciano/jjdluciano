import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaViber } from "react-icons/fa";
import Section from "./section";

export default function FooterSection() {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("#6d6f7a", "#bbc4cf");

  const router = useRouter();
  const delay = useMemo(() => {
    if(router.pathname.split('/')[1]) {
      return 0.9;
    } else {
      return 1.8;
    }
  }, [router]) 
  

  return (
    <Section delay={delay}>
      <Box as="footer" pt="6" pb="3" mx="auto" my="auto">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="2"
          spacing={4}
        >
          <a href="https://www.facebook.com/jjdluciano">
            <Box>
              <FaFacebook size={24} color={iconColor} />
            </Box>
          </a>
          <a href="https://www.linkedin.com/in/john-jerome-luciano-a65490233/">
            <Box>
              <FaLinkedin size={24} color={iconColor} />
            </Box>
          </a>
          <a href="https://github.com/jeromeluciano">
            <Box>
              <FaGithub size={24} color={iconColor} />
            </Box>
          </a>
          <a href="https://msng.link/o/?639156969987=vi">
            <Box>
              <FaViber size={24} color={iconColor} />
            </Box>
          </a>
        </Stack>
        <Text textAlign="center" color={textColor} fontSize="xs">
          &copy; {new Date().getFullYear()} John Jerome D. Luciano
        </Text>
      </Box>
    </Section>
  );
}
