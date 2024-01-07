import { Box, GridItem, HStack, LinkBox, Text, Image } from "@chakra-ui/react";
import { useMotionValue, motion, useMotionTemplate, MotionStyle, MotionValue } from "framer-motion";
import { type MouseEvent } from 'react'
import NextImage, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import FeaturedCard from "../featured-card";
import { generateIconElement } from "../../utils/generator";

interface ProjectItemProps {
  thumbnail: string | StaticImageData;
  title: string;
  link: string;
  githubLink?: string;
  description: string;
  tools?: string[];
}

export default function ProjectItem({ thumbnail, title, link, githubLink, description, tools }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const toolsIcons = tools.map(tool => generateIconElement(tool))

  return (
    <GridItem _hover={{ transform: "scale(1.1)", transition: "0.2s" }} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} borderRadius="3xl"  >
      <FeaturedCard>
        <Box h="100%">
          <LinkBox cursor="pointer" display="flex" flexDirection="column" w="100%">
            <Link href={link}>
              <Box position="relative" overflow="hidden">
                <Box p={0}>
                  <Image
                    as={NextImage}
                    src={thumbnail}
                    alt={title}
                    opacity={isHovered ? "0.9" : "1"}
                    objectFit="contain"
                  />
                </Box>
                {/*<Box role="group" display={isHovered ? "flex" : "none"} position="absolute" top="0" borderRadius={15} bg="rgba(17, 17, 1, 0.5)" w="full" height="full" justifyContent="center" alignItems="center" paddingBottom={0}> */}
                <Box px={4} pt={2} pb={4}>
                  <Text fontWeight="bold">{title}</Text>
                  <Text fontSize="xs">{description}</Text>
                  <HStack _hover={{ color: "#FFFFF5" }} pt={2}>
                    {toolsIcons}
                  </HStack>
                </Box>
                { /* </Box> */}
              </Box>
            </Link>
          </LinkBox>
        </Box>
      </FeaturedCard>
    </GridItem>
  );
}
