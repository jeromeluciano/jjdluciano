import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import usePrimaryColor from "../hooks/usePrimaryColor";
import ToggleThemeButton from "./toggle-theme-button";

export default function Navbar() {
  const primaryColor = usePrimaryColor();
  const bgColor = useColorModeValue("purple.50", "gray.800");
  return (
    <Box py="4" mx={{ sm: "4" }}>
      <Flex gridGap={8} alignItems="center">
        <Box flex={{ sm: "1", md: 0 }}>
          <Text fontWeight="bold" fontSize="xl" color={primaryColor}>
            jjdl
          </Text>
        </Box>
        <Stack
          direction="row"
          spacing="4"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          flex={{ sm: "0", md: "1" }}
        >
          <Stack
            direction="row"
            spacing="8"
            flex={{ sm: "1", md: 0 }}
            display={{ sm: "none", md: "flex" }}
          >
            <Link href="#home">
              <LinkBox letterSpacing="wider" cursor="pointer">
                home
              </LinkBox>
            </Link>
            <Link href="#about">
              <LinkBox letterSpacing="wider" cursor="pointer">
                about
              </LinkBox>
            </Link>
            <Link href="#skills">
              <LinkBox letterSpacing="wider" cursor="pointer">
                skills
              </LinkBox>
            </Link>
            <a href="jjdluciano-resume.pdf">
              <LinkBox letterSpacing="wider" cursor="pointer">
                resume
              </LinkBox>
            </a>
          </Stack>
          <Stack direction={{ sm: "row" }}>
            <ToggleThemeButton bg={primaryColor} />
            <Box display={{ sm: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                ></MenuButton>
                <MenuList bg={bgColor}>
                  <MenuItem>home</MenuItem>
                  <MenuItem>about</MenuItem>
                  <MenuItem>skills</MenuItem>
                  <MenuItem>resume</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
