// src/components/ui/ShakeWrapper.tsx
import { motion } from 'framer-motion';
import type { Variant } from 'framer-motion';
import type { ReactNode } from 'react';

interface ShakeWrapperProps {
  children: ReactNode;
  shake: boolean;
  duration?: number; // in seconds
}

const shakeVariants: { [key: string]: Variant } = {
  initial: { x: 0 },
  shake: {
    x: [0, -8, 6, -6, 4, -4, 2, -2, 0],
    transition: {
      duration: 0.5,           // ← adjust as needed
      ease: "easeOut",         // ← this is a valid literal → no error
      // times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1], // optional — remove if not needed
    },
  },
  done: { x: 0 },
};

export default function ShakeWrapper({
  children,
  shake,
  duration = 0.5,
}: ShakeWrapperProps) {
  return (
    <motion.div
      variants={shakeVariants}
      initial="initial"
      animate={shake ? "shake" : "done"}
      // Optional: reset shake after animation ends
      // onAnimationComplete={(definition) => {
      //   if (definition === "shake") {
      //     // You can setShake(false) here via callback prop if desired
      //   }
      // }}
    >
      {children}
    </motion.div>
  );
}