import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import Section from "./section";

export default function AboutSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();
  return (
    <Section delay={0.6}>
      <Stack mt="8" spacing={4} id="about">
        <Text
          fontWeight="bold"
          textDecoration="underline"
          textUnderlineOffset="5px"
          // @ts-ignore
          textDecorationThickness={2}
          color={primaryColor}
        >
          about me
        </Text>
        <Text
          fontSize="sm"
          color={textColor}
          lineHeight="10"
          textAlign="justify"
          px="4"
          style={{ textIndent: "25px" }}
        >
          I&apos;m John Jerome a fresh graduate who enjoys experimenting with
          new latest web technologies. I enjoy building and learning with react
          and other new stacks. I&apos;m currently looking for full-time work as
          a junior front-end or back-end developer.
        </Text>
      </Stack>
    </Section>
  );
}
