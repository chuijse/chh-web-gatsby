import React, { useState } from "react";
import flechahorizontal from "../images/flechaHorizontal.svg";
import flechaHorizontalB from "../images/flechaHorizontalB.svg";
import { AnimatePresence, motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = (props) => {
  const [active, setactive] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setactive(true)}
        onHoverEnd={() => setactive(false)}
        whileHover={{ scale: 1.1 }}
      >
        <div className={props.color}>
          <div className="cardTitle">
            <h3>{props.title}</h3>
            <span className="subtitle">
              {props.year} | {props.semester}° smestre
            </span>
          </div>

          <div className="cardBackground">
            <AnimatePresence exitBeforeEnter>
              {active ? (
                <motion.div
                  className="cardAbstract"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
                    {props.abstract}
                  </motion.div>
                </motion.div>
              ) : (
                <GatsbyImage
                  image={props.mainImage}
                  alt={props.mainCaption}
                  className="cardMainImage"
                ></GatsbyImage>
              )}
            </AnimatePresence>
          </div>
          <div className="cardCategory">
            <h4>{props.university}</h4>
          </div>
          <AnimatePresence>
            {active ? (
              <motion.div
                className="cardArrow"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
              >
                <img
                  src={
                    props.color !== "whiteCard"
                      ? flechahorizontal
                      : flechaHorizontalB
                  }
                  alt="flecha-blog-chh.work"
                  width="65"
                ></img>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
