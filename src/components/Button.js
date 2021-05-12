import React, { useState } from "react";
import flechaHorizontalB from "../images/flechaHorizontal.svg";
import { AnimatePresence, motion } from "framer-motion";

const Button = (props) => {
  const [active, setactive] = useState(false);
  return (
    <>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <motion.div
          onHoverStart={() => setactive(true)}
          onHoverEnd={() => setactive(false)}
        >
          <div className="marginButton">
            <div className="button">
              <motion.div
                className="block"
                initial={false}
                animate={{ width: active ? "400%" : "100%" }}
              />

              <motion.span
                initial={false}
                animate={{ x: active ? 10 : 0 }}
                className="name"
              >
                {props.name}
              </motion.span>
              <div className="arrow">
                <AnimatePresence exitBeforeEnter>
                  {active ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <img
                        src={flechaHorizontalB}
                        alt="flecha-blog-chh.work"
                        width="65"
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </>
  );
};

export default Button;
