import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const primaryColor = useColorModeValue("purple.700", "purple.400");
  return primaryColor;
};
