import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PortableText from "./PortableText";
import ImageGallery from "./ImageGallery";

export default function TemplateBodyDescription({
  portableText,
  imageGallery,
  descriptionTitle,
}) {
  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);
  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);
  return (
    <div className="course-body-description" ref={ref}>
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        {descriptionTitle}
      </motion.h3>
      <motion.span
        className="course-body-description-animation"
        initial={{ clipPath: "inset(0% 100% 0% 0%)", y: "0" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 1.25,
          delay: 0.5,
        }}
      >
        <PortableText blocks={portableText}></PortableText>
      </motion.span>
      <ImageGallery gallery={imageGallery}></ImageGallery>
    </div>
  );
}
