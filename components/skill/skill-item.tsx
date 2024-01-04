import { Icon, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
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
      <VStack>

      </VStack>
    </motion.div>
  );
}
