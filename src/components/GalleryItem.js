import React, { useState } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";

const ImageGallerItem = (props) => {
  const [ItemSelected, setItemSelected] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setItemSelected(true)}
      onHoverEnd={() => setItemSelected(false)}
      animate={{ scale: ItemSelected ? 1.1 : 1 }}
      key={props.index}
      className="galleryItem"
    >
      <motion.div
        className="itemSelected"
        animate={{ opacity: ItemSelected ? 1 : 0 }}
      >
        <motion.div animate={{ x: ItemSelected ? 0 : -80 }}>
          <img src={GoArrow} alt="CHH flecha para abrir imagen"></img>
        </motion.div>
      </motion.div>
      <div className="itemImage">
        <GatsbyImage
          image={props.image.asset.thumb}
          alt={props.image.caption}
        ></GatsbyImage>
      </div>
    </motion.div>
  );
};

export default ImageGallerItem;
