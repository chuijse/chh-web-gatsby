import React, { useState } from "react";
import flechaHorizontal from "../images/flechaHorizontal.svg";
import flechaHorizontalB from "../images/flechaHorizontalB.svg";
import { AnimatePresence, motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ title, year, semester, mainImage, mainCaption, abstract }) => {
  const [active, setactive] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setactive(true)}
        onHoverEnd={() => setactive(false)}
      >
        <div className="card-root">
          <div className="image-content">
            <motion.div
              className="image-content-animation"
              animate={{ height: active ? "110%" : "100%" }}
              transition={{ duration: 0.5 }}
            >
              <GatsbyImage
                image={mainImage}
                alt={mainCaption}
                className="card-image"
              ></GatsbyImage>
            </motion.div>
          </div>
          <motion.div
            className="info-content"
            animate={{
              height: active ? "200px" : "90px",
              padding: active ? "30px" : "15px",
              /*marginBottom: active ? "-15px" : "0px",*/
              marginLeft: active ? "-15px" : "0px",
              marginRight: active ? "-15px" : "0px",
            }}
            transition={{ duration: "0.5" }}
          >
            <div className="card-title">
              <span className="subtitle">
                {year} | {semester}° semestre
              </span>
              <motion.h3
                animate={{ color: active ? "#ff7f2a" : "white " }}
                transition={{ duration: "0.5" }}
              >
                {title}
              </motion.h3>

              {active ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: "1" }}
                  className="info-open"
                >
                  <p>
                    UX / UI, Interfaces físicas, Diseño de instrumentos, Diseño
                    de productos
                  </p>
                  <motion.img
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: "0.5" }}
                    src={flechaHorizontal}
                    alt="flecha-teaching-chh.work"
                    width="45"
                  />
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
