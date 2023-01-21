import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import Section from "./section";

export default function AboutSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();
  return (
    <Section delay={0.9}>
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
          I am a problem solver at heart, with a strong desire to simplify complex issues and devise elegant solutions. I am also a skilled coder with a passion for programming logic and structure. I am passionate about writing efficient and beautiful code, both frontend and backend.
        </Text>
      </Stack>
    </Section>
  );
}
