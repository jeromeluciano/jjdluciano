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
import netflixImg from "../public/images/projects/netflix.jpg";
import ProjectItem from "./project/project-item";
import Section from "./section";
import SectionTitle from "./section-title";

export default function ProjectSection() {
  const primaryColor = usePrimaryColor();
  return (
    <Section delay={1.5} className="mt-6 mb-8" >
      <Stack spacing={4}>
        <SectionTitle title="🚧 Projects" />
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md:"repeat(2, 1fr)"}} gap={8}>
          <ProjectItem
            thumbnail={cyclickImg}
            githubLink="https://github.com/jeromeluciano/Cyclick"
            title="CyClick"
            link="https://github.com/jeromeluciano/Cyclick"
            description="App that lets you record your travel"
            tools={['js', 'react', 'firebase']}
          />
          <ProjectItem
            thumbnail={pollyImg}
            title="Polly"
            githubLink="https://github.com/jeromeluciano/Cyclick"
            link="/projects/polly"
            description="App that lets you instantly create poll"
            tools={['js', 'react', 'trpc', 'planetscale', 'tailwindcss']}
          />
          <ProjectItem
            thumbnail={netflixImg}
            title="Netflix Clone"
            githubLink="https://github.com/jeromeluciano/Cyclick"
            link="/projects/netflix-clone"
            description="A clone of Netflix with NextJS + TailwindCSS"
            tools={['react', 'js', 'tailwindcss', 'firebase', 'next']}
          />
        </Grid>
      </Stack>
    </Section>
  );
}
