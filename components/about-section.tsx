import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Center,
  LinkBox,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";
import useTextColor from "../hooks/useTextColor";
import AnimatedButton from "./animated-button";
import Section from "./section";
import SectionTitle from "./section-title";

export default function AboutSection() {
  const primaryColor = usePrimaryColor();
  const textColor = useTextColor();

  const downloadResume = () => {
    window.open("jjdluciano-resume.pdf");
  };

  return (
    <Section delay={0.9}>
      <Stack mt="8" spacing={4} id="about">
        <SectionTitle title="about me" />
        <Text
          fontSize="md"
          color={textColor}
          lineHeight="10"
          textAlign="justify"
          // px="4"
          style={{ textIndent: "25px" }}
        >
          I am a problem solver at heart, with a strong desire to simplify
          complex issues and devise elegant solutions. I am also a skilled web
          developer with a passion for programming logic and structure. I am
          passionate about web development, both frontend and backend. 
        </Text>
        {/* <Center mt="2">
          <AnimatedButton
            title="Download my resume"
            handler={downloadResume}
            rightIcon={<ArrowLeftIcon fontSize="xs" />}
            leftIcon={<ArrowRightIcon fontSize="xs" />}
          />
        </Center> */}
      </Stack>
    </Section>
  );
}
