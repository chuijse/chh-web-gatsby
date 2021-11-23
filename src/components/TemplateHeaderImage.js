import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function TemplateHeaderImage({ isTablet, mainImage }) {
  return (
    <motion.div
      className="course-header-image-content"
      initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
      transition={{
        duration: 1,
        delay: isTablet ? 0 : 1,
      }}
    >
      <GatsbyImage
        className="header-image"
        image={mainImage.asset.gatsbyImageData}
        alt={`${mainImage.caption}`}
      ></GatsbyImage>
    </motion.div>
  );
}
