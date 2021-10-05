import React, { useState } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";

const ImageGallerItem = ({ setIndex, i, image }) => {
  const [ItemSelected, setItemSelected] = useState(false);
  return (
    <motion.div
      className="card"
      onClick={() => setIndex(i)}
      onHoverStart={() => setItemSelected(true)}
      onHoverEnd={() => setItemSelected(false)}
    >
      <div className="card-content-container">
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
      </div>
    </motion.div>
  );
};

export default ImageGallerItem;
