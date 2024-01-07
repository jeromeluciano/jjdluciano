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
    <Section delay={0.6} className="mt-8">
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        flexFlow={{ sm: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gridGap="8"
      >
        <Stack flex="2" spacing={4} letterSpacing="2" justifyContent="center">
          <Grid templateColumns="100px auto" columnGap={5}>
            <Box>
              <Image as={NextImage} w="40" h="40" rounded="3xl" src={`${Me}`} alt="me" />
            </Box>
            <VStack alignItems="start" justifyContent="center">
              
              <Text
                fontSize={{ sm: "xl", md: "xl" }}
                textAlign={{ sm: "center", md: "justify" }}
              >
                I&apos;m{" "}
                <Text as="span" color={primaryColor} fontWeight="bold">
                  John Jerome D. Luciano
                </Text>
              </Text>
              <Text
                fontSize={{ sm: "md", md: "md" }}
                color="yellow.300"
                fontWeight="bold"
                textAlign={{ sm: "center", md: "justify" }}
              >
                Web Developer
              </Text>
            </VStack>
          </Grid>
          <Text
            fontSize={{ sm: "lg", md: "lg" }}
            color={textColor}
            textAlign={{ sm: "justify", md: "justify" }}
            lineHeight="10"
          >
           Hey there! I love messing around with <span class="text-blue-300/90">web stuff</span>, always trying to figure out how things tick. Recently jumped into the <span className="text-yellow-200/90">Linux world</span>, messing around with <span className="text-pink-200/90">EndeavorOS</span> and soaking up everything I can. When I&apos;m not nerding out on <span className="text-blue-300/90">tech</span>, you&apos;ll probably find me cruising on my <span className="text-red-400/90">bike</span> or getting lost in some <span className="text-blue-300/90">video game</span> world. Let&apos;s <span className="text-blue-300/90">build cool things</span> and have fun doing it! 🚀🕹️🚴‍♂️          </Text>

          <HStack mt="8" justifyContent={{ sm: "left", md: "left" }}>
            <a href="https://github.com/jeromeluciano" target="_blank" rel="noreferrer">
              <AnimatedButton title="Github" LeftIcon={FaGithub}/>
            </a>
            <a href="/jjdluciano-resume.pdf" target="_blank" rel="noreferrer">
              <AnimatedButton title="My Resume" LeftIcon={FaFileDownload} />
            </a>
          </HStack>
        </Stack>

      </Flex>
    </Section>
  );
}
