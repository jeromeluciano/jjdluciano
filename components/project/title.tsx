import { Heading, LinkBox, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import usePrimaryColor from "../../hooks/usePrimaryColor";

export default function Title({ title, link }) {
  const color = usePrimaryColor()
  return (
    <LinkBox cursor="pointer" _hover={{ textDecoration: "underline" }}>
      <Link href={link}>
        <Heading fontSize={{ md: "3xl", sm: "2xl" }} fontWeight="extrabold" textAlign="left" color={color} letterSpacing="wide">
          {title}
        </Heading>
      </Link>
    </LinkBox>
  );
}
