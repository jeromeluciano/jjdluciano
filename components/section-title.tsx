import { Text } from "@chakra-ui/react";
import usePrimaryColor from "../hooks/usePrimaryColor";

export default function SectionTitle({ title }) {
  const primaryColor = usePrimaryColor();

  return (
    <Text fontWeight="900"
      color={primaryColor}
      fontSize="lg"
    >
      {title}
    </Text>
  );
}
