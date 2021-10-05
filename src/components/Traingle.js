import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Triangle = ({ xPosition }) => {
  const [position, setPosition] = useState(0);

  const updatePosition = () => {
    if (xPosition) {
      let xi = xPosition;
      const object = xi.getBoundingClientRect();
      const x = object.x + object.width / 2 - 15;
      setPosition(x);
    }
  };

  useEffect(updatePosition, [xPosition, position]);

  useEffect(() => {
    window.addEventListener("resize", updatePosition, true);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position]);

  return (
    <>
      <motion.div
        className="triangle"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: position, opacity: 1 }}
        transition={{
          type: "spring",

          mass: 1,

          stiffness: 50,

          duration: 1,
        }}
      />
    </>
  );
};

export default Triangle;
