import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
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
          lineHeight="8"
          textAlign="justify"
          px="2"
          style={{ textIndent: "25px" }}
        >
          I&apos;m a recent information technology graduate who enjoys
          experimenting with web technologies. I enjoy building things with
          React and have a strong interest in learning new technologies in the
          Web development ecosystem. I&apos;m currently looking for an
          opportunity that will allow me to use my skills.
          {/* I&apos;m an Information Technology Graduate who loves to explore and
        tinker with web technologies. I enjoy building things with React and I
        have a huge passion when it comes to learning new technologies in Web
        development ecosystem. I&apos;m currently looking for a job that will
        allow me to put my skills to good use. */}
        </Text>
      </Stack>
    </Section>
  );
}
