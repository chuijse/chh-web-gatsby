import React, { useState } from "react";
import Seo from "./Seo";
import { GatsbyImage } from "gatsby-plugin-image";
import ArrowBack from "../images/arrowBack.svg";
import ArrowForward from "../images/arrowForward.svg";
import Close from "../images/close.svg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GallerItem from "./GalleryItem";

export default function ImageGaller({ gallery }) {
  const [index, setIndex] = useState(false);

  return (
    <>
      <h4>Galería de imagenes</h4>
      <AnimateSharedLayout type="crossfade">
        <Gallery items={gallery} setIndex={setIndex} />
        <AnimatePresence>
          {index !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
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
        <GallerItem image={image} i={i} setIndex={setIndex} />
      ))}
    </div>
  );
}

function SingleImage({ image, index, onClick }) {
  return (
    <div className="card-content-container open" onClick={onClick}>
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
    </div>
  );
}