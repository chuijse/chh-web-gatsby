import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import PortableText from "../components/PortableText";
import ImageGallery from "../components/ImageGallery";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

const transition = [0.6, 0.01, -0.05, 0.9];
const duration = 1.4;

const item = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,

    transition: { transition, ...transition },
  },
};

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

const CourseArticle = ({ data, isMobil, isTablet }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const course = data?.sanityCourses;
  //console.log(`${course} esto es course`);

  const containers = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <React.Fragment>
      <div className="course-root">
        <div className="course-header">
          <motion.div
            className="course-header-info"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: duration,
              ease: transition,
              delay: isTablet ? 0.3 : 0,
            }}
          >
            <h1 className="course-header-title">{course.title}</h1>
            <HeaderStat statClass={"Contenidos"} statName={course.abstract} />
            <HeaderStat statClass={"Rol"} statName={"Profesor Adjunto"} />
            <HeaderStat
              statClass={"Cliente"}
              statName={course.universities.name}
            />
            <HeaderStat
              statClass={"Año"}
              statName={`${course.year} | ${course.semester}° semestre`}
            />
          </motion.div>
          <motion.div
            className="course-header-image-content"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: duration,
              ease: transition,
              delay: isTablet ? 0 : 0.3,
            }}
          >
            <GatsbyImage
              className="header-image"
              image={course.mainImage.asset.gatsbyImageData}
              alt={course.mainImage.caption}
            ></GatsbyImage>
          </motion.div>
        </div>
        <div className="course-body">
          <motion.div
            className="course-body-links"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: duration,
              ease: transition,
              delay: isTablet ? 0.9 : 0.6,
            }}
          >
            <h3>Links de interés</h3>
            <div className="course-body-links-buttons">
              <ButtonArray
                data={course.colleagues}
                collectionType={"Colegas, compañeros y Colaboradores:"}
              />
              <ButtonArray
                data={course.tecnologies}
                collectionType={"Tecnicas, herramientas y tecnologías:"}
              />
            </div>
            <BackButton text="Volver a Docenia" path="/teaching" />
          </motion.div>
          <motion.div
            className="course-body-description"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: duration,
              ease: transition,
              delay: isTablet ? 0.6 : 0.9,
            }}
          >
            <h3>Description del curso</h3>
            <PortableText blocks={course._rawBody}></PortableText>
            <ImageGallery gallery={course.imageGallery}></ImageGallery>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

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
