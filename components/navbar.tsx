import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Hide,
  IconButton,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import useBGColor from "../hooks/useBGColor";
import usePrimaryColor from "../hooks/usePrimaryColor";
import Section from "./section";
import ToggleThemeButton from "./toggle-theme-button";

export default function Navbar() {
  const primaryColor = usePrimaryColor();
  const bgColor = useBGColor()
  return (
    <Section delay={0.3}>
      <Box py="4" mx={{ sm: "4" }}>
        <Flex gridGap={8} alignItems="center">
          <Box flex={{ sm: "1", md: 0 }}>
            <LinkBox cursor="pointer" w="fit-content">
              <Link href="/">
                <Text fontWeight="900" fontSize="xl" color={primaryColor}>
                  JJDL
                </Text>
              </Link>
            </LinkBox>
          </Box>
          <Box flex={{ sm: "1", md: 0 }} display={{ sm: "none", md: "flex" }}>
            <LinkBox cursor="pointer">
              <Link href={'/writings'}>
                <Text fontSize="md">writings</Text>
              </Link>
            </LinkBox>
          </Box>
          <Box flex={{ sm: "1", md: 0 }} display={{ sm: "none", md: "flex" }}>
            <LinkBox cursor="pointer">
              <Link href={'/music'}>
                <Text fontSize="md">music</Text>
              </Link>
            </LinkBox>
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
            ></Stack>
            <Stack direction={{ sm: "row" }}>
              {/* <ToggleThemeButton bg={primaryColor} /> */}

              <Box display={{ sm: "inline-block", md: "none" }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    aria-label="dropdown button for mobile"
                  ></MenuButton>
                  <MenuList bg={bgColor}>
                    <Link href="/">
                      <MenuItem>
                        <LinkBox letterSpacing="wider" cursor="pointer">
                          home
                        </LinkBox>
                      </MenuItem>
                    </Link>
                    <Link href="/writings">
                      <MenuItem>
                        <LinkBox letterSpacing="wider" cursor="pointer">
                          writings
                        </LinkBox>
                      </MenuItem>
                    </Link>
                    <Link href="/projects">
                      <MenuItem>
                        <LinkBox letterSpacing="wider" cursor="pointer">
                          projects
                        </LinkBox>
                      </MenuItem>
                    </Link>
                    <a href="/jjdluciano-resume.pdf">
                      <MenuItem>
                        <LinkBox letterSpacing="wider" cursor="pointer">
                          resume
                        </LinkBox>
                      </MenuItem>
                    </a>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Section>
  );
}
