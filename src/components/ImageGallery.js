import React, { useState } from "react";
//import Seo from "./Seo";
import { GatsbyImage } from "gatsby-plugin-image";
//import ArrowBack from "../images/arrowBack.svg";
//import ArrowForward from "../images/arrowForward.svg";
//import Close from "../images/close.svg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GallerItem from "./GalleryItem";

export default function ImageGaller({ gallery }) {
  const [index, setIndex] = useState(false);

  return (
    <>
      <h3>Galería de imagenes</h3>
      <AnimateSharedLayout>
        <Gallery items={gallery} setIndex={setIndex} />
        <AnimatePresence>
          {index !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key="overlay"
              className="overlay"
              onClick={() => setIndex(false)}
            />
          )}

          {index !== false && (
            <SingleImage
              key="image"
              index={index}
              image={gallery[index]}
              setIndex={setIndex}
              onClick={() => setIndex(false)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

function Gallery({ items, setIndex }) {
  return (
    <div className="card-list">
      {items?.map((image, i) => (
        <GallerItem
          key={`card-list-${i}`}
          image={image}
          i={i}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
}

function SingleImage({ image, index, onClick }) {
  return (
    <button className="card-content-container open" onClick={onClick}>
      <motion.div className="card-content" layoutId={`card-container-${index}`}>
        <motion.div
          className="card-image-container"
          layoutId={`card-image-container-${index}`}
        >
          <GatsbyImage
            image={image.asset.thumb}
            alt={image.caption}
            className="card-image"
          ></GatsbyImage>
        </motion.div>
        <p className="white-caption"> Descripción: {image.caption}</p>
      </motion.div>
    </button>
  );
}
