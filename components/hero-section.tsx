import { Box, Fade, Flex, Image, LinkBox, Stack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import Section from "./section";

export default function HeroSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();

  return (
    <Section delay={0.6}>
      <Flex flexDirection={{ sm: "column", md: "row" }} flexFlow={{ sm: "column-reverse", md: "row" }} mt="8" alignItems="center" justifyContent="space-between" gridGap="8">
        <Stack flex="2" letterSpacing="2" justifyContent="center">
          <Text fontSize={{ sm: "lg", md: "xl" }} color={textColor} textAlign={{ sm: "center", md: "justify" }}>
            👋 Hello there!
          </Text>
          <Text fontSize={{ sm: "xl", md: "lg" }} textAlign={{ sm: "center", md: "justify" }}>
            I&apos;m{" "}
            <Text as="span" color={primaryColor} fontWeight="bold">
              John Jerome D. Luciano
            </Text>
          </Text>
          <Text
            fontSize={{ sm: "small", md: "xs" }}
            color={textColor}
            textAlign={{ sm: "center", md: "justify" }}
            lineHeight="6"
          >
            I love tinkering with{" "}
            <Text as="span" color={primaryColor}>
              technologies
            </Text>
            .
          </Text>


        </Stack>
        <Box flex="1" display={{ md: "block" }} width={200}>
          <Image
            alt="me.jpg"
            as={NextImage}
            width={10}
            height="full"
            rounded="md"
            src={require("../public/images/me2.jpg")}
          />
        </Box>
      </Flex>
    </Section>
  );
}
