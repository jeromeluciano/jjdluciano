import { useColorModeValue } from "@chakra-ui/react";

export default function useIconColor() {
  return useColorModeValue("yellow.100", "yellow.300");

}
