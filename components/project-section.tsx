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
import ProjectItem from "./project/project-item";

export default function ProjectSection() {
  const primaryColor = usePrimaryColor();
  return (
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
          link=""
          description="App that lets you record your travel"
        />
        <ProjectItem
          thumbnail={cyclickImg}
          title="CyClick"
          link=""
          description="App that lets you record your travel"
        />
      </SimpleGrid>
    </Stack>
  );
}
