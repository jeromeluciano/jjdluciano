import { Heading, LinkBox, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Title({ title, link }) {
  const textColor = useColorModeValue("gray.700", "gray.200");
  return (
    <LinkBox cursor="pointer" _hover={{ textDecoration: "underline" }}>
      <Link href={link}>
        <Heading fontSize={{ md: "3xl", sm: "2xl" }} fontWeight="extrabold" textAlign="left" color={textColor} letterSpacing="wide">
          {title}
        </Heading>
      </Link>
    </LinkBox>
  );
}
