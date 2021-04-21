import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Triangle = (props) => {
  const [position, setPosition] = useState(0);

  const updatePosition = () => {
    if (props.xPosition.current) {
      let xi = props.xPosition;
      const object = xi.current.getBoundingClientRect();
      const x = object.x + object.width / 2 - 15;
      setPosition(x);
    }
  };

  useEffect(updatePosition, [props.xPosition, position]);

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
        transition={{ duration: 0.8 }}
      />
    </>
  );
};

export default Triangle;
