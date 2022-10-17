import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";

export default function AboutSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();
  return (
    <Stack mt="8" spacing={4} id="about">
      <Text
        fontWeight="bold"
        textDecoration="underline"
        textUnderlineOffset="5px"
        // @ts-ignore
        textDecorationThickness={2}
        color={primaryColor}
      >
        about
      </Text>
      <Text
        fontSize="sm"
        color={textColor}
        lineHeight="7"
        textAlign="justify"
        style={{ textIndent: "3.5rem" }}
      >
        {/* // eslint-disable-next-line react/no-unescaped-entities */}I
        recently received my Bachelor&apos;s Degree in Information Technology at
        City of Malabon University. During my academic years I enjoyed learning
        web technologies, from Frontend to backend. I learned the basics of
        HTML, CSS, JavaScript during my first year and backend programming
        languages along the way.
      </Text>
    </Stack>
  );
}
