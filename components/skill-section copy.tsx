import { Box, Icon, Stack, Text } from "@chakra-ui/react";
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
import SkillItem from "./skill/skill-item";

export default function SkillSection() {
  const textColor = useTextColor();
  const primaryColor = usePrimaryColor();
  return (
    <Section delay={1.2}>
      <Stack mt="10" spacing={8} id="skills">
        <Text
          fontWeight="bold"
          textDecoration="underline"
          textUnderlineOffset="5px"
          // @ts-ignore
          textDecorationThickness={2}
          color={primaryColor}
        >
          skills & technologies I used
        </Text>
        <Stack
          direction="row"
          spacing={{ sm: "6", md: "8" }}
          justifyContent="space-around"
        >
          <Stack spacing={{ sm: "8", md: "8" }}>
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
          </Stack>
          <Stack spacing={{ sm: "8", md: "8" }}>
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
          </Stack>
          <Stack spacing={{ sm: "8", md: "8" }}>
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
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
}
