import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const primaryColor = useColorModeValue("yellow.900", "yellow.50");
  return primaryColor;
};
