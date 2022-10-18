import {
  Box,
  Flex,
  Grid,
  GridItem,
  LinkBox,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import usePrimaryColor from "../hooks/usePrimaryColor";
import cyclickImg from "../public/images/projects/cyclick.png";
import pollyImg from "../public/images/projects/polly.png";
import ProjectItem from "./project/project-item";
import Section from "./section";

export default function ProjectSection() {
  const primaryColor = usePrimaryColor();
  return (
    <Section delay={1.2}>
      <Stack my="8" spacing={8}>
        <Text
          fontWeight="bold"
          textDecoration="underline"
          textUnderlineOffset="5px"
          // @ts-ignore
          textDecorationThickness={2}
          color={primaryColor}
        >
          projects
        </Text>
        <SimpleGrid columns={[1, 1, 2, 2]} minHeight={120} gap={8}>
          <ProjectItem
            thumbnail={cyclickImg}
            title="CyClick"
            link="https://github.com/jeromeluciano/CyClick-final"
            description="App that lets you record your travel"
          />
          <ProjectItem
            thumbnail={pollyImg}
            title="Polly"
            link="https://polly-one.vercel.app/"
            description="App that lets you instantly create poll"
          />
        </SimpleGrid>
      </Stack>
    </Section>
  );
}
