import { useColorModeValue } from "@chakra-ui/react";

export default function useBGColor(){ 
  const bgColor = useColorModeValue("yellow.50", "#09090B");
  return bgColor; 
}
