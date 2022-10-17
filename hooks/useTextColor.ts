import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const textColor = useColorModeValue("gray.900", "gray.200");
  return textColor;
};
