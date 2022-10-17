import { Icon, Stack, Text } from "@chakra-ui/react";
import useTextColor from "../../hooks/useTextColor";

export default function SkillItem({ icon, itemText, ...pageProps }) {
  const textColor = useTextColor();
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      alignItems="center"
      spacing={4}
    >
      <Icon as={icon} {...pageProps} name="css" display={{ md: "block" }} />
      <Text
        fontSize={{ sm: "sm", md: "initial" }}
        fontWeight="medium"
        letterSpacing="wider"
        color={textColor}
      >
        {itemText}
      </Text>
    </Stack>
  );
}
