import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PortableText from "./PortableText";
import ImageGallery from "./ImageGallery";

export default function TemplateBodyDescription({
  portableText,
  imageGallery,
  descriptionTitle,
  slug,
  location,
  id,
}) {
  return (
    <section className="course-body-description">
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        viewport={{ once: true }}
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
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.25,
          delay: 0.5,
        }}
      >
        <PortableText blocks={portableText}></PortableText>
      </motion.span>

      <ImageGallery
        id={id}
        gallery={imageGallery}
        slug={slug}
        location={location}
      ></ImageGallery>
    </section>
  );
}
