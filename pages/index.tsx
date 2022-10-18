import { Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/about-section";
import DynamicHeroSection from "../components/dynamic-hero-section";
import HeroSection from "../components/hero-section";
import Layout from "../components/layouts/main";
import ProjectSection from "../components/project-section";
import SkillSection from "../components/skill-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Jerome D. Luciano</title>
        <meta name="description" content="My portfolio website" />
        <meta property="og:url" content="https://www.jjdluciano.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="John Jerome D. Luciano" />
        <meta property="og:description" content="My portfolio website" />
        <meta
          property="og:image"
          content="https://www.jjdluciano.com/images/opengraph.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jjdluciano.com" />
        <meta property="twitter:url" content="https://www.jjdluciano.com/" />
        <meta name="twitter:title" content="John Jerome D. Luciano" />
        <meta name="twitter:description" content="My portfolio website" />
        <meta
          name="twitter:image"
          content="https://www.jjdluciano.com/images/opengraph.png"
        />
      </Head>
      <Layout>
        <DynamicHeroSection />
        {/* About */}
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        {/* end about */}
      </Layout>
    </>
  );
}
