import {
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  HStack,
  Image,
  LinkBox,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import Section from "./section";
import { FaFile, FaFileDownload, FaGithub } from "react-icons/fa";
import Me from '../public/images/me2.jpg'
import AnimatedButton from "./animated-button";

export default function HeroSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();

  return (
    <Section delay={0.6}>
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        flexFlow={{ sm: "column-reverse", md: "row" }}
        mt="8"
        alignItems="center"
        justifyContent="space-between"
        gridGap="8"
      >
        <Stack flex="2" spacing={4} letterSpacing="2" justifyContent="center">
          <Grid templateColumns="100px auto" columnGap={5}>
            <Box>
              <Image as={NextImage} w="40" h="40" borderRadius={15} src={Me} />
            </Box>
            <VStack alignItems="start" justifyContent="center">
              <Text
                fontSize={{ sm: "lg", md: "xl" }}
                color={textColor}
                textAlign={{ sm: "center", md: "justify" }}
              >
                👋 Hello there!
              </Text>
              <Text
                fontSize={{ sm: "xl", md: "xl" }}
                textAlign={{ sm: "center", md: "justify" }}
              >
                I&apos;m{" "}
                <Text as="span" color={primaryColor} fontWeight="bold">
                  John Jerome D. Luciano
                </Text>
              </Text>
            </VStack>
          </Grid>
          <Text
            fontSize={{ sm: "md", md: "md" }}
            color={textColor}
            textAlign={{ sm: "center", md: "justify" }}
            lineHeight="9"
          >
            I am a problem solver at heart, with a strong desire to simplify
            complex issues and devise elegant solutions. I am also a skilled web
            developer with a passion for programming, logic and structure. I am
            passionate about web development, both frontend and backend.
          </Text>

          <HStack mt="8" justifyContent={{ sm: "center", md: "left" }}>
            <a href="https://github.com/jeromeluciano" target="_blank" rel="noreferrer">
              <AnimatedButton title="Github" LeftIcon={<FaGithub size={16} />}/>
            </a>
            <a href="/jjdluciano-resume.pdf" target="_blank" rel="noreferrer">
              <AnimatedButton title="My Resume" LeftIcon={<FaFileDownload size={16} />} />
            </a>
          </HStack>
        </Stack>

      </Flex>
    </Section>
  );
}
