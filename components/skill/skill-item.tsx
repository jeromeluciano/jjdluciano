import { Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTextColor from "../../hooks/useTextColor";

export default function SkillItem({ icon, itemText, delay, ...pageProps }) {
  const textColor = useTextColor();
  const bgColor = useColorModeValue("blue.50", "#27272A")
  const borderColor = useColorModeValue("blue.300","#3F3F46")

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
        _hover={{ transform: "scale(1.1)" }}
        backgroundColor={bgColor}
        // borderColor=""
        py={2}
        mx={2}
        px={2}
        // borderWidth="1px"
        rounded="lg"
      >
        <Icon as={icon} {...pageProps} name="css" display={{ md: "block" }} />
        <Text
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="wider"
          color={textColor}
        >
          {itemText}
        </Text>
      </Stack>
    </motion.div>
  );
}
