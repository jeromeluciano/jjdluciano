import { Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTextColor from "../../hooks/useTextColor";

export default function SkillItem({ icon, itemText, delay, ...pageProps }) {
  const textColor = useTextColor();

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems="center"
        spacing={4}
        _hover={{ transform: "scale(1.1)" }}
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
