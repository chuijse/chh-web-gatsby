import React, { useState, useEffect } from "react";
//import Seo from "./Seo";
import { GatsbyImage } from "gatsby-plugin-image";
//import ArrowBack from "../images/arrowBack.svg";
//import ArrowForward from "../images/arrowForward.svg";
//import Close from "../images/close.svg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GallerItem from "./GalleryItem";
import { useInView } from "react-intersection-observer";

export default function ImageGaller({ gallery }) {
  const [index, setIndex] = useState(false);

  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);
  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        Galería de imagenes
      </motion.h3>
      <AnimateSharedLayout>
        <Gallery items={gallery} setIndex={setIndex} inView={inView} />
        <AnimatePresence>
          {index !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
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
    </div>
  );
}

function Gallery({ items, setIndex }) {
  const item = {
    initial: {
      clipPath: "inset(100% 0% 0% 0%)",
      y: "-100%",
    },
    animate: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: "0",
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div className="card-list">
      {items?.map((image, i) => (
        <GallerItem
          key={`card-list-${i}`}
          image={image}
          i={i}
          setIndex={setIndex}
        />
      ))}
    </motion.div>
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
