import {
  AspectRatio,
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  HStack,
  Image, keyframes,
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
import Me2 from '../public/images/jerome2.png'
import Me3 from '../public/images/jeromesky3.jpg'
import AnimatedButton from "./animated-button";

const wavy = keyframes`
  0% {
    border-top-left-radius: 100px;
    border-top-right-radius: 60px;
  }
  20% { 
    border-top-left-radius: 40px;
    border-top-right-radius: 100px;
  }
  40% {
    border-top-left-radius: 60px;
    border-top-right-radius: 80px;
  }
  60% {
    border-top-left-radius: 80px;
    border-top-right-radius: 60px;
  }
  80% {
    border-top-left-radius: 100px;
    border-top-right-radius: 40px;
  }
  100% {
    border-top-left-radius: 120px;
    border-top-right-radius: 60px;
  }
`;
export default function HeroSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();
  const wavyAnimation = `${wavy} infinite 8s ease-in-out`;

  return (
    <Section delay={0.6} className="mt-8">
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        flexFlow={{ sm: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gridGap="8"
      >
        <Stack flex="2" spacing={{sm: 4, md: 8}} letterSpacing="2" justifyContent="center">
          <Grid justifyContent={{ sm: "center", md: "start" }} templateColumns={{ sm: "auto", md: "150px auto" }} columnGap={8} rowGap={7}>
            <Flex justifyContent="center" alignItems="center" maxW={60}>
              {/* @ts-ignore */}
              <Image as={NextImage} w={70} h={70} animation={wavyAnimation} className=" rounded-bl-[110px] rounded-br-[110px]" src={Me3} alt="me" />

            </Flex>
            <VStack spacing={2} alignItems={{ sm: "center", md: "start" }} justifyContent="center">
              <Text
                fontSize={{ sm: "xl", md: "xl" }}
                textAlign={{ sm: "left", md: "justify" }}
              >
                I&apos;m{" "}
                <Text textAlign="center" as="span" color={primaryColor} fontWeight="bold">
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
            Hey there! I love messing around with <span className="text-blue-300/90">web stuff</span>, always trying to figure out how things tick. Recently jumped into the <span className="text-yellow-200/90">Linux world</span>, messing around with <span className="text-pink-200/90">EndeavorOS</span> and soaking up everything I can. When I&apos;m not nerding out on <span className="text-blue-300/90">tech</span>, you&apos;ll probably find me cruising on my <span className="text-red-400/90">bike</span> or getting lost in some <span className="text-blue-300/90">video game</span> world. Let&apos;s <span className="text-blue-300/90">build cool things</span> and have fun doing it! 🚀🕹️🚴‍♂️
          </Text>

          <HStack mt="8" justifyContent={{ sm: "left", md: "left" }}>
            <a href="https://github.com/jeromeluciano" target="_blank" rel="noreferrer">
              <AnimatedButton title="Github" LeftIcon={FaGithub} />
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
