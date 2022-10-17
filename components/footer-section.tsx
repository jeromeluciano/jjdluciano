import { Box, Text } from "@chakra-ui/react";
import useTextColor from "../hooks/useTextColor";

export default function FooterSection() {
  const textColor = useTextColor();
  return (
    <Box as="footer" py="6">
      <Text textAlign="center" color={textColor} fontSize="xs">
        &copy; {new Date().getFullYear()} John Jerome D. Luciano | Made with 💜
      </Text>
    </Box>
  );
}
