import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";
import { navigate } from "gatsby";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { PhotoTransitionContext } from "../Context/PhotoTransitionContext";

const ImageGallerItem = ({ i, image, slug, location, id }) => {
  const [ItemSelected, setItemSelected] = useState(false);
  const {p, setPhotoTransition} = useContext(PhotoTransitionContext)

  useEffect(() => {
    if (location.state?.lastId) {
      scrollTo(`${location.state?.lastId}`);
      //console.log(location.state.lastId);
    }
  }, []);

  function scrollTo(id) {
    scroller.scrollTo(id, {
      //duration: 2000,
      duration: 0,
      delay: 0,
      smooth: "easeInOutCubic",
    });
  }

  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);

  useEffect(() => {
    if (inView) {
      //console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);

  
 
  function  handleNavigation(current, i, imageCurrent){
    setPhotoTransition(true)
    setTimeout(()=>{navigate(`/teaching/${current}/${i}/${imageCurrent}`, { state:{ originPathname: `/teaching/${current}/${i}/${imageCurrent}`} } ) }, 500)
  }

  return (
    <figure ref={ref}>
      <motion.div
        id={`gallery-item${id}-${i}`}
        className="card"
        onClick={() => handleNavigation(slug.current, i, image.slug.current) }
        onHoverStart={() => setItemSelected(true)}
        onHoverEnd={() => setItemSelected(false)}
      >
        <motion.div
          className="card-content-container"
          initial={{ clipPath: "inset(0% 0% 0% 100%)", x: "-100%" }}
          animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", x: "0" }}
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
    </figure>
  );
};

export default ImageGallerItem;
