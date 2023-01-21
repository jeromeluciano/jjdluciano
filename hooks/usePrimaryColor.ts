import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const primaryColor = useColorModeValue("red.600", "red.400");
  return primaryColor;
};
