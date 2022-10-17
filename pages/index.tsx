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
    <Layout>
      <DynamicHeroSection />
      {/* About */}
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      {/* end about */}
    </Layout>
  );
}
