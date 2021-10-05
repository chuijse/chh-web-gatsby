import React, { useState } from "react";
import Seo from "../components/Seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { Dialog } from "@reach/dialog";
import ArrowBack from "../images/arrowBack.svg";
import ArrowForward from "../images/arrowForward.svg";
import Close from "../images/close.svg";
import GalleryItem from "./GalleryItem";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function ImageGaller(props) {
  const [lightbox, setLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openLighBox(x, y) {
    setSelectedImage(y);
    setLightBox(true);
    console.log(x, y);
  }

  return (
    <>
      <h4>Galería de imagenes</h4>
      <AnimateSharedLayout layout="image">
        <div className="galleryGrid">
          {props.gallery?.map((image, index) => (
            <button
              className="preImage"
              key={index}
              onClick={() => openLighBox(image, index)}
            >
              <GalleryItem image={image} index={index} />
            </button>
          ))}
        </div>
        {lightbox && (
          <Dialog onDismiss={() => setLightBox(false)}>
            <div className="GridDialog">
              <button className="closeItem" onClick={() => setLightBox(false)}>
                <img src={Close} alt="CHH gallery close button" />
              </button>

              <motion.div
                className="leftItem"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() =>
                  setSelectedImage(
                    selectedImage > 0
                      ? selectedImage - 1
                      : props.gallery.length - 1
                  )
                }
              >
                <img src={ArrowBack} alt="CHH gallery left arrow" />
              </motion.div>

              <motion.div layout="image" style={{ border: "1px solid green" }}>
                <GatsbyImage
                  className="dialogImageItem"
                  image={props.gallery[selectedImage].asset.high}
                  alt={props.gallery[selectedImage].caption}
                ></GatsbyImage>
              </motion.div>

              <motion.div
                className="rightItem"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() =>
                  setSelectedImage(
                    selectedImage < props.gallery.length - 1
                      ? selectedImage + 1
                      : 0
                  )
                }
              >
                <img src={ArrowForward} alt="CHH gallery right arrow" />
              </motion.div>

              <div className="infoItem">
                <p className="captionNunmber">
                  Descripción: {props.gallery[selectedImage].caption}
                  <br></br>
                  <span className="littleTitle">
                    Imagen: {selectedImage + 1}/{props.gallery.length}
                  </span>
                </p>
              </div>
            </div>
          </Dialog>
        )}
      </AnimateSharedLayout>
    </>
  );
}