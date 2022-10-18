import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
const Section: FC<{ children: ReactNode; delay: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
