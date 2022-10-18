import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub, FaViber } from "react-icons/fa";

export default function FooterSection() {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("#6d6f7a", "#bbc4cf");
  return (
    <Box as="footer" pt="6" pb="3" mx="auto">
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
        <a href="https://github.com/jeromeluciano">
          <Box>
            <FaLinkedin size={24} color={iconColor} />
          </Box>
        </a>
        <a href="https://www.linkedin.com/in/john-jerome-luciano-a65490233/">
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
        &copy; {new Date().getFullYear()} John Jerome D. Luciano | Made with 💜
      </Text>
    </Box>
  );
}
