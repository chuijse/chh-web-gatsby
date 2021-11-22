import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import PortableText from "../components/PortableText";
import ImageGallery from "../components/ImageGallery";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackButton from "../components/BackButton";
import ShareButtons from "../components/Share";
import SmoothScroll from "../components/SmoothScroll";

//const transition = [0.6, 0.01, -0.05, 0.9];
//dconst duration = 1.4;

function HeaderStat({ statClass, statName }) {
  return (
    <div className="course-header-stat">
      <p className="course-header-stat-class">{statClass}</p>
      <p className="course-header-stat-info">{statName}</p>
    </div>
  );
}

function ButtonArray({ collectionType, data }) {
  return (
    <div className="button-collection">
      <p>{collectionType}</p>
      {data.map((data, index) => (
        <span key={index}>
          <Button name={data.name} link={data.link}></Button>
        </span>
      ))}
    </div>
  );
}

const CourseArticle = ({ data, isMobil, isTablet, location }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const course = data?.sanityCourses;
  //console.log(`${course} esto es course`);

  const container = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: isTablet ? 1.3 : 0.3,
        staggerChildren: 0.75,
      },
    },
  };

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
    <React.Fragment>
      <motion.div className="course-root" exit={{ opacity: 0 }}>
        <div className="course-root-header">
          <div className="course-header">
            <motion.div
              initial="initial"
              animate="animate"
              variants={container}
              className="course-header-info"
            >
              <motion.h1
                initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
                transition={{
                  duration: 0.5,
                  delay: isTablet ? 1 : 0,
                }}
                className="course-header-title"
              >
                {course.title}
              </motion.h1>
              <motion.span
                variants={item}
                className="course-header-animation-stat"
              >
                <HeaderStat
                  statClass={"Contenidos"}
                  statName={course.abstract}
                />
                <HeaderStat
                  variants={item}
                  statClass={"Rol"}
                  statName={"Profesor Adjunto"}
                />
                <HeaderStat
                  variants={item}
                  statClass={"Cliente"}
                  statName={course.universities.name}
                />
                <HeaderStat
                  variants={item}
                  statClass={"Año"}
                  statName={`${course.year} | ${course.semester}° semestre`}
                />
              </motion.span>
            </motion.div>
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
                image={course.mainImage.asset.gatsbyImageData}
                alt={course.mainImage.caption}
                isTablet={isTablet}
              ></GatsbyImage>
            </motion.div>
          </div>
        </div>
        <div className="course-root-body">
          <div className="course-body">
            <CourseBodyLinks
              colleagues={course.colleagues}
              tecnologies={course.tecnologies}
              title={course.title}
              location={location.href}
            />
            <div className="course-body-description">
              <motion.h3
                initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
                transition={{
                  duration: 0.5,
                  delay: isTablet ? 2 : 1,
                }}
              >
                Description del curso
              </motion.h3>
              <motion.span
                className="course-body-description-animation"
                initial={{ clipPath: "inset(0% 100% 0% 0%)", y: "0" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
                transition={{
                  duration: 1,
                  delay: isTablet ? 2 : 1,
                }}
              >
                <PortableText blocks={course._rawBody}></PortableText>
                <ImageGallery gallery={course.imageGallery}></ImageGallery>
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

function CourseBodyLinks({ colleagues, tecnologies, title, location }) {
  const [ref, inView] = useInView();
  const [inScreen, setInScreen] = useState(false);
  useEffect(() => {
    if (inView) {
      console.log(`inView: ${inView}`);
      setInScreen(true);
    }
  }, [inView]);
  return (
    <div className="course-body-links" ref={ref} style={{ marginTop: "10px" }}>
      <motion.h3
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        Links de interés
      </motion.h3>
      <motion.span
        className="course-body-links-aniamtion"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
        animate={inScreen && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="course-body-links-buttons">
          <ButtonArray
            data={colleagues}
            collectionType={"Colegas, compañeros y Colaboradores:"}
          />
          <ButtonArray
            data={tecnologies}
            collectionType={"Tecnicas, herramientas y tecnologías:"}
          />
        </div>
        <BackButton text="Volver a Docenia" path="/teaching" />
        <ShareButtons
          title={`${title} | CHH Portafolio`}
          url={location}
          twitterHandle={"CHH_Portafolio"}
          tags={["CHH"]}
        />
      </motion.span>
    </div>
  );
}

export default CourseArticle;

export const query = graphql`
  query CourseTemplate($id: String!) {
    sanityCourses(id: { eq: $id }) {
      id
      abstract
      title
      year
      semester
      _rawBody(resolveReferences: { maxDepth: 10 })
      universities {
        name
      }
      colleagues {
        name
        link
      }
      tecnologies {
        name
        link
      }
      slug {
        _key
        _type
        current
      }
      mainImage {
        caption
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      imageGallery {
        asset {
          thumb: gatsbyImageData(placeholder: BLURRED)
          high: gatsbyImageData(fit: SCALE, placeholder: BLURRED)
          url
        }
        caption
      }
    }
  }
`;
