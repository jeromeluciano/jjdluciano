import { useColorModeValue } from "@chakra-ui/react";

export default () => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  return textColor;
};
