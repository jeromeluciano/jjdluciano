import { Box, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion, MotionStyle, MotionValue, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { useIsMobile } from "../hooks/useIsMobile";

type WrapperStyle = MotionStyle & {
  '--x': MotionValue<string>,
  '--y': MotionValue<string>,
}

interface AnimatedButtonProps {
  title: string;
  handler?: () => void;
  RightIcon?: IconType,
  LeftIcon?: IconType
}

function AnimatedButton({ title, handler, RightIcon, LeftIcon }: AnimatedButtonProps) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;

    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (<motion.div
    className="animated-button-cards relative drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]"
    onMouseMove={handleMouseMove}
    style={
      {
        '--x': useMotionTemplate`${mouseX}px`,
        '--y': useMotionTemplate`${mouseY}px`,
      } as WrapperStyle}
  >
    <button
      className="group flex items-center space-x-2 rounded-lg relative px-4 py-1 overflow-hidden border bg-gradient-to-b from-neutral-950/90 to-neutral-950/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-950/90 md:hover:border-transparent text-sm"
      onClick={handler}
    >
        {LeftIcon ? <Icon as={LeftIcon} size={16} />:null}
        <span>{title}</span>
    </button>
  </motion.div>)
}

export default AnimatedButton;
