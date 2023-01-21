import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  return primaryColor;
};
