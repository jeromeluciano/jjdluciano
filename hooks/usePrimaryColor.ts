import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const primaryColor = useColorModeValue("blue.700", "red.400");
  return primaryColor;
};
