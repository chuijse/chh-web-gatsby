import { motion } from "framer-motion";
import React from "react";

export default function SlidingAnimation({ children, right }) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, x: right ? 1500 : -1500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: right ? -1500 : 1500 }}
        transition={{
          type: "spring",

          mass: 0.6,

          stiffness: 60,

          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}
