import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import GoArrow from "../images/goArrow.svg";
import { useInView } from "react-intersection-observer";
import { graphql, navigate } from "gatsby";
import ArrowBack from "../images/arrowBack.svg";
import ArrowForward from "../images/arrowForward.svg";
import BackButton from "../components/BackButton";
import { NavViewContext } from "../Context/NavViewContext";
import Seo from "../components/Seo";
import HeaderStat from "../components/HeaderStat";
import ShareButtons from "../components/Share";

export default function SingleImage(props) {
  const course = props.data?.sanityCourses;
  const { pageContext } = props;
  const { index, totalLenghtIndex } = pageContext;
  const { s, setNavView } = useContext(NavViewContext);

  useEffect(() => {
    setNavView(false);
    return () => {
      setNavView(true);
    };
  }, []);

  function HandleNext() {
    if (index < totalLenghtIndex - 1) {
      navigate(
        `/teaching/${course.slug.current}/${index + 1}/${
          course.imageGallery[index + 1].slug.current
        }`
      );
    } else {
      navigate(
        `/teaching/${course.slug.current}/${0}/${
          course.imageGallery[0].slug.current
        }`
      );
    }
  }

  function HandlePreview() {
    if (index !== 0) {
      navigate(
        `/teaching/${course.slug.current}/${index - 1}/${
          course.imageGallery[index - 1].slug.current
        }`
      );
    } else {
      navigate(
        `/teaching/${course.slug.current}/${totalLenghtIndex - 1}/${
          course.imageGallery[totalLenghtIndex - 1].slug.current
        }`
      );
    }
  }

  return (
    <React.Fragment>
      <Seo
        title={`${course.title}, galeria de imágenes`}
        description={`${course.abstract} | Descripción Foto: ${course.imageGallery[index].caption}`}
        image={course.imageGallery[index].photo.asset.url}
      />
      <div
        className="single-image-root"
        style={{ border: "2px solid green" }}
        //onClick={() => navigate(`/teaching/${course.slug.current}`)}
      >
        <div className="single-image">
          <SingleImageHeader
            title={course.title}
            slug={course.slug}
            index={index}
            id={course.id}
            caption={course.imageGallery[index].caption}
            totalLenghtIndex={totalLenghtIndex}
            location={props.location}
            abstract={course.abstract}
          />
          <div
            className="single-image-body"
            style={{ border: "1px solid blue" }}
          >
            <div className="single-image-content">
              <button
                onClick={() => HandlePreview()}
                className="single-image-arrow-button"
              >
                <img
                  src={ArrowBack}
                  width={60}
                  alt="back Arrow gallery, CHH | Portfolio"
                ></img>
              </button>
              <GatsbyImage
                image={course.imageGallery[index].photo.asset.gatsbyImageData}
                alt={course.imageGallery[index].caption}
                objectFit="scale-down"
                className="fullsize-image"
              ></GatsbyImage>
              <button
                onClick={() => HandleNext()}
                className="single-image-arrow-button"
              >
                <img
                  src={ArrowForward}
                  width={60}
                  alt="forward arrow gallery, CHH | Portfolio"
                ></img>
              </button>
            </div>
            {/*<p className="white-caption">
              Descripción: {course.imageGallery[index].caption} | index:{" "}
              {index + 1}/{totalLenghtIndex},
            </p>*/}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function SingleImageHeader({
  title,
  slug,
  id,
  index,
  caption,
  totalLenghtIndex,
  location,
  abstract,
}) {
  return (
    <div className="single-image-header" style={{ border: "2px solid red" }}>
      <div className="single-image-header-content">
        <h1>Galeria de imágenes</h1>
        <HeaderStat statClass={"Título de curso:"} statName={title} />
        <br />
        <HeaderStat statClass={"Resumen del curos:"} statName={abstract} />
        <br />
        <HeaderStat statClass={"Descripción de la foto:"} statName={caption} />
        <br />
        <HeaderStat
          statClass={"Número de foto:"}
          statName={`${index + 1}/${totalLenghtIndex}`}
        />
        <BackButton
          path={`/teaching/${slug.current}`}
          text={`Docencia/${slug.current}`}
          id={`gallery-item${id}-${index}`}
        />
        <ShareButtons
          title={`${title} | CHH Portafolio`}
          url={location.href}
          twitterHandle={"CHH_Portafolio"}
          tags={["CHH"]}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query CoursePhotoTemplate($id: String!) {
    sanityCourses(id: { eq: $id }) {
      id
      abstract
      title
      year
      semester
      universities {
        name
      }
      slug {
        current
      }
      imageGallery {
        photo {
          asset {
            gatsbyImageData(placeholder: BLURRED)
            url
            metadata {
              _rawDimensions(resolveReferences: { maxDepth: 10 })
            }
          }
        }
        caption
        slug {
          current
        }
      }
    }
  }
`;
