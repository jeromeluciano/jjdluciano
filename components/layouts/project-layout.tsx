import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Title from "../project/title";
import Layout from "./main";
import netflixImg from "../../public/images/projects/netflix.jpg";
import Section from "../section";

export default function ProjectLayout({ children, meta }) {
  return (
      <Layout>
        <Section delay={0.6}>
        <VStack spacing={8} mt="4" alignItems="left">
          <Title title={meta.title} link={meta.link} />
          <Box>
            {children}
          </Box>
        </VStack>
        </Section>
      </Layout>
  );
}
