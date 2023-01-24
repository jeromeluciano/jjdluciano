import { Button, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

function AnimatedButton({ title, handler, rightIcon, leftIcon }) {
  const buttonColor = useColorModeValue("blue.500", "blue.600");
  const buttonText = useColorModeValue("gray.50", "gray.100");
  return (
    <Button
      as={motion.button}
      onClick={handler}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      animation={"ease"}
      backgroundColor={buttonColor}
      color={buttonText}
      fontSize="xs"
      rightIcon={rightIcon}
      leftIcon={leftIcon}
    >
      {title}
    </Button>
  );
}

export default AnimatedButton;
