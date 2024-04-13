import { Box } from "@chakra-ui/react";
import { useMotionValue, motion, useMotionTemplate, MotionValue, MotionStyle } from "framer-motion"
import { type MouseEvent, useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

type WrapperStyle = MotionStyle & {
  '--x': MotionValue<string>,
  '--y': MotionValue<string>
}

export default function FeaturedCard({ children }) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []); 

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;

    const {left, top} = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="animated-feature-cards relative w-full drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]"
      onMouseMove={handleMouseMove}
      style={
        {
          '--x': useMotionTemplate`${mouseX}px`,
          '--y': useMotionTemplate`${mouseY}px`
        } as WrapperStyle
      }
    >
      <Box className="group relative w-full overflow-hidden rounded-3xl border bg-gradient-to-b transition duration-300 from-neutral-950/90 to-neutral-900/90 md:hover:border-transparent">
        {mounted ? children : null}
      </Box>
    </motion.div>
  )
}
