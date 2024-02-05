import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import { SiC, SiChakraui, SiMysql, SiTailwindcss } from "react-icons/si";

import Section from "./section";
import SectionTitle from "./section-title";
import SkillItem from "./skill/skill-item";
import { MdCss, MdHtml, MdJavascript, MdPhp } from "react-icons/md";
import { FaHtml5, FaPhp, FaReact, FaCss3Alt, FaLaravel } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {TbBrandNextjs} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'


export default function SkillSection() {
  const textColor = useTextColor();
  const primaryColor = usePrimaryColor();

  return (
    <Section delay={1.2} className="mt-6">
      <Stack spacing={4} id="skills">
        <Flex direction="column">
          <SectionTitle title="⚒️  Languages & Frameworks"/>
          <Flex mt={4}>
            <Grid templateColumns={{ sm: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }} gap={4} w="full">
              <SkillItem title="Hypertext Markup Language" Icon={FaHtml5} bgColor="#F95835"/>
              <SkillItem title="CSS3" Icon={FaCss3Alt} bgColor="#4286E0"/>
              <SkillItem title="TailwindCSS" Icon={SiTailwindcss} bgColor="#FFFFFF" color="#43ADDA"/>
              <SkillItem title="Javascript" Icon={IoLogoJavascript} bgColor="#F4E166" color="#111101"/>
              <SkillItem title="ReactJS" Icon={FaReact} bgColor="#23272F" color="#149ECA"/>
              <SkillItem title="NextJS" Icon={TbBrandNextjs} bgColor="#23272F"/>
              <SkillItem title="ChakraUI" Icon={SiChakraui} bgColor="#FFF" color="#44C8C1"/>
              <SkillItem title="Laravel" Icon={FaLaravel} bgColor="#F03E30"/>
              <SkillItem title="PHP" Icon={FaPhp} bgColor="#7277AD"/>
              <SkillItem title="MySQL" Icon={SiMysql} bgColor="#3E6E93"/>
            </Grid>
          </Flex>
        </Flex>
      </Stack>
    </Section>
  );
}
