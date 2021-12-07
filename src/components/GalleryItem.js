import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";

import { navigate } from "gatsby";
import { scroller } from "react-scroll";

const ImageGallerItem = ({ i, image, slug, location, id }) => {
  const [ItemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    if (location.state?.lastId) {
      scrollTo(`${location.state.lastId}`);
      console.log(location.state.lastId);
    }
  }, []);

  function scrollTo(id) {
    scroller.scrollTo(id, {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutCubic",
    });
  }

  return (
    <motion.div
      id={`gallery-item${id}-${i}`}
      className="card"
      onClick={() => navigate(`/teaching/${slug}/${i}/${image.slug.current}`)}
      onHoverStart={() => setItemSelected(true)}
      onHoverEnd={() => setItemSelected(false)}
    >
      <motion.div
        className="card-content-container"
        initial={{ clipPath: "inset(0% 0% 0% 100%)", x: "-100%" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", x: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div className="card-content" layoutId={`card-container-${i}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${i}`}
          >
            <GatsbyImage
              image={image.photo.asset.gatsbyImageData}
              className="card-image"
              objectFit="cover"
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
