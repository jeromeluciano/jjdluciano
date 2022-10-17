import { Box, Fade, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";

export default function HeroSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();

  return (
    <Flex mt="8" justifyContent="space-between" gridGap="8">
      <Stack flex="2" letterSpacing="2" justifyContent="center">
        <Text fontSize={{ sm: "2xl", md: "xl" }} color={textColor}>
          👋 Hello there!
        </Text>
        <Text fontSize={{ sm: "2xl", md: "xl" }}>
          I&apos;m{" "}
          <Text as="span" color={primaryColor} fontWeight="bold">
            John Jerome D. Luciano
          </Text>
        </Text>
        <Text
          fontSize={{ sm: "small", md: "xs" }}
          color={textColor}
          textAlign="justify"
          lineHeight="6"
        >
          I love tinkering with{" "}
          <Text as="span" color={primaryColor}>
            web technologies
          </Text>
          .
        </Text>
      </Stack>
      <Box flex="1" display={{ sm: "none", md: "block" }}>
        <Image
          alt="me.jpg"
          as={NextImage}
          width={15}
          height="full"
          rounded="md"
          src={require("../public/images/me.jpg")}
        />
      </Box>
    </Flex>
  );
}
