import React, { useState, useEffect, useRef } from "react";
//import Close from "../images/close.svg";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GallerItem from "./GalleryItem";
import { useInView } from "react-intersection-observer";

export default function ImageGallery({ gallery, slug, location, id }) {
  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);

  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);

  return (
    <section ref={ref}>
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
      <div className="card-list">
        {gallery?.map((image, i) => (
          <GallerItem
            key={`card-list-${i}`}
            image={image}
            slug={slug}
            i={i}
            id={id}
            location={location}
          />
        ))}
      </div>
    </section>
  );
}
