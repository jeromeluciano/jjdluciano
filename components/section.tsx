import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
const Section: FC<{ children: ReactNode; delay: number, as?: string, className?: string }> = ({
  children,
  delay = 0,
  as = 'div',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Section;
