import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function FooterSection() {
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box as="footer" py="6">
      <Text textAlign="center" color={textColor} fontSize="xs">
        &copy; {new Date().getFullYear()} John Jerome D. Luciano | Made with 💜
      </Text>
    </Box>
  );
}
