import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";
import { useInView } from "react-intersection-observer";

const ImageGallerItem = ({ setIndex, i, image }) => {
  const [ItemSelected, setItemSelected] = useState(false);
  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);
  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="card"
      onClick={() => setIndex(i)}
      onHoverStart={() => setItemSelected(true)}
      onHoverEnd={() => setItemSelected(false)}
    >
      <motion.div
        className="card-content-container"
        initial={{ clipPath: "inset(0% 0% 0% 100%)", x: "-100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", x: "0" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div className="card-content" layoutId={`card-container-${i}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${i}`}
          >
            <GatsbyImage
              image={image.asset.thumb}
              className="card-image"
            ></GatsbyImage>
          </motion.div>
        </motion.div>
        <motion.div
          className="card-hover"
          animate={{ opacity: ItemSelected ? 1 : 0 }}
        >
          <motion.div animate={{ x: ItemSelected ? 0 : -80 }}>
            <img src={GoArrow} alt="CHH flecha para abrir imagen"></img>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallerItem;
