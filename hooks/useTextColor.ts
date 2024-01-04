import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const textColor = useColorModeValue("yellow.900", "yellow.50");
  return textColor;
};
