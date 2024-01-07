import { Box, Flex, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useBGColor from "../../hooks/useBGColor";
import useTextColor from "../../hooks/useTextColor";
import { RiJavascriptFill } from 'react-icons/ri'
import {MdHtml} from 'react-icons/md'
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface SkillItemProps {
  Icon: IconType;
  delay: number;
  bgColor: string;
  color?: string;
}

export default function SkillItem({ Icon, delay, bgColor, color, ...pageProps }: SkillItemProps) {
  const [mounted, setMounted] = useState(false);
  const textColor = useColorModeValue("yellow.100", "yellow.900")

  useEffect(()=>{
    setMounted(false)
  }, [])

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      <Flex alignItems="center" justifyContent="center" backgroundColor={bgColor} rounded="20" padding={4}>
        {<Icon size={38} color={color ? color : "rgb(254, 252, 232)"} />}
      </Flex>
    </motion.div>
  );
}
