import {
  Box,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ToggleThemeButton({ ...pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const textColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box>
      <IconButton
        as={Button}
        onClick={toggleColorMode}
        aria-label="theme toggle button"
        icon={Icon}
        color={textColor}
        bg="purple.300"
        {...pageProps}
      />
    </Box>
  );
}
