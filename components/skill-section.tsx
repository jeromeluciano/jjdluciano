import { Box, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import {
  HTMLIcon,
  JSIcon,
  TSIcon,
  CSSIcon,
  ReactIcon,
  NextIcon,
  PrismaIcon,
  MySQLIcon,
  ExpressIcon,
  TRPCIcon,
  LaravelIcon,
} from "./icons-svg/custom-icons";
import Section from "./section";
import SectionTitle from "./section-title";
import SkillItem from "./skill/skill-item";

export default function SkillSection() {
  const textColor = useTextColor();
  const primaryColor = usePrimaryColor();
  return (
    <Section delay={1.2}>
      <Stack mt="10" spacing={8} id="skills"> 
        <SectionTitle title="technologies I used" />
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={10}
          // rowGap="4"
          // gridAutoFlow=""
        >
          <SkillItem
            icon={HTMLIcon}
            itemText="HTML5"
            w="8"
            h="8"
            delay={0.1}
          />
          <SkillItem icon={CSSIcon} itemText="CSS3" w="8" h="8" delay={0.2} />
          <SkillItem
            icon={JSIcon}
            itemText="JavaScript"
            w="8"
            h="8"
            delay={0.3}
          />

          <SkillItem
            icon={ReactIcon}
            itemText="React.js"
            w="8"
            h="8"
            delay={0.4}
          />
          <SkillItem
            icon={NextIcon}
            itemText="Next.js"
            w="8"
            h="8"
            delay={0.5}
          />
          <SkillItem
            icon={TSIcon}
            itemText="TypeScript"
            w="8"
            h="8"
            delay={0.6}
          />


          <SkillItem
            icon={PrismaIcon}
            itemText="Prisma"
            w="8"
            h="8"
            delay={0.7}
          />
          <SkillItem
            icon={MySQLIcon}
            itemText="MySQL"
            w="8"
            h="8"
            delay={0.8}
          />
          <SkillItem
            icon={LaravelIcon}
            itemText="Laravel"
            w="8"
            h="8"
            delay={0.9}
          />

        </Grid>
      </Stack>
    </Section>
  );
}
