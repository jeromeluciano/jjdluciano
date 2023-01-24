import { Text } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";

export default function SectionTitle({ title }) {
  const primaryColor = usePrimaryColor();

  return (
    <Text
      fontWeight="bold"
      textDecoration="underline"
      textUnderlineOffset="5px"
      // @ts-ignore
      textDecorationThickness={2}
      color={primaryColor}
      fontSize="lg"
    >
      {title}
    </Text>
  );
}
