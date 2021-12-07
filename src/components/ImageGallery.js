import React, { useState, useEffect } from "react";
//import Close from "../images/close.svg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GallerItem from "./GalleryItem";
import { useInView } from "react-intersection-observer";

export default function ImageGallery({ gallery, slug, location, id }) {
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
    <div>
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        Galería de imagenes
      </motion.h3>
      <AnimateSharedLayout>
        <Gallery items={gallery} slug={slug} id={id} location={location} />
      </AnimateSharedLayout>
    </div>
  );
}

function Gallery({ items, slug, id, location }) {
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
          slug={slug}
          i={i}
          id={id}
          location={location}
        />
      ))}
    </motion.div>
  );
}
