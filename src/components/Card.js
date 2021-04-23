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

          <div
            className="cardBackground"
            style={{
              backgroundImage: `url('https://cdn.sanity.io/${props.mainImage}')`,
            }}
          >
            <AnimatePresence>
              {active ? (
                <motion.div
                  className="cardAbstract"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {props.abstract}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="cardCategory">
            <span>{props.university}</span>
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
      <GatsbyImage image={props.mainImage}></GatsbyImage>
    </>
  );
};

export default Card;
