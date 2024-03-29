import React, { useState, useEffect, useContext } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, navigate } from "gatsby";
import ArrowBack from "../images/arrowBack.svg";
import ArrowForward from "../images/arrowForward.svg";
import BackButton from "../components/BackButton";
import { NavViewContext} from "../Context/NavViewContext";
import { PhotoTransitionContext } from "../Context/PhotoTransitionContext";
import Seo from "../components/Seo";
import HeaderStat from "../components/HeaderStat";
import ShareButtons from "../components/Share";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";
import { window } from "browser-monads"; //npm i browser-monads
import { use100vh } from "react-div-100vh";
import "../style/index.scss";

export default function SingleImage(props) {
  const [viewHeader, setViewHeader] = useState(false);
  const course = props.data?.sanityCourses;
  const { pageContext } = props;
  const { index, totalLenghtIndex } = pageContext;
  const { s, setNavView } = useContext(NavViewContext);
  const {p, setPhotoTransition} = useContext(PhotoTransitionContext)
  const isMobilorTablet = useMediaQuery({ maxWidth: 992 });

  const height = use100vh();


  useEffect(() => {
    setNavView(false);
    setPhotoTransition(true);

    if (isMobilorTablet === true) {
      setViewHeader(false);
    } else {
      setViewHeader(true);
    }
    return () => {
      setNavView(true);
    };
  }, []);

  function HandleNext() {
    if (index < totalLenghtIndex - 1) {
      navigate(
        `/teaching/${course.slug.current}/${index + 1}/${
          course.imageGallery[index + 1].slug.current
        }`,
        { replace: true }
      );
    } else {
      navigate(
        `/teaching/${course.slug.current}/${0}/${
          course.imageGallery[0].slug.current
        }`,
        { replace: true }
      );
    }
  }

  function HandlePreview() {
    if (index !== 0) {
      navigate(
        `/teaching/${course.slug.current}/${index - 1}/${
          course.imageGallery[index - 1].slug.current
        }`,
        { replace: true }
      );
    } else {
      navigate(
        `/teaching/${course.slug.current}/${totalLenghtIndex - 1}/${
          course.imageGallery[totalLenghtIndex - 1].slug.current
        }`,
        { replace: true }
      );
    }
  }

  function MobilHadle(x) {
    if (x >= window.innerWidth - 80 && x !== 0) {
      console.log(x);
      HandleNext();
    }
    if (x <= 80 && x !== 0) {
      console.log(x);
      HandlePreview();
    }
  }

  //console.log(props.location.pathname)

  return (
    <React.Fragment>
      <Seo
        title={`${course.title}, galeria de imágenes`}
        description={`${course.abstract} | Descripción Foto: ${course.imageGallery[index].caption}`}
        image={course.imageGallery[index].photo.asset.url}
      />
      <motion.article
        className="single-image-root"
        style={{ height: height, overflow: "hidden" }}
        //initial={{ clipPath: "inset(0% 0% 0% 100%)", x: "100%" }}
        //animate={{ clipPath: "inset(0% 0% 0% 0%)", x: "0" }}
        //transition={{ duration: 1 }}

        //onClick={() => navigate(`/teaching/${course.slug.current}`)}
      >
        {/*<motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            background: "#000",
            height: "100%",
            width: "100%",
            zIndex: 100,
          }}
        />*/}
        <AnimatePresence exitBeforeEnter>
          {viewHeader && (
            <SingleImageHeader
              title={course.title}
              slug={course.slug}
              index={index}
              id={course.id}
              caption={course.imageGallery[index].caption}
              totalLenghtIndex={totalLenghtIndex}
              location={props.location}
              abstract={course.abstract}
              isMobilorTablet={isMobilorTablet}
              viewHeader={viewHeader}
            />
          )}
        </AnimatePresence>
        <div className="single-image-body">
          {isMobilorTablet && (
            <span className="single-image-body-Mobil-title">
              {!viewHeader ? (
                <BackButton
                  path={`/teaching/${course.slug.current}`}
                  text={``}
                  id={`gallery-item${course.id}-${index}`}
                  originPathname={props.location.pathname}
                  replace={true}
                />
              ) : (
                <div>{""}</div>
              )}
              <button onClick={() => setViewHeader(!viewHeader)}>
                <span className="info-indicator">
                  {!viewHeader ? "+" : "-"}
                </span>
                info
              </button>
            </span>
          )}
          {!isMobilorTablet && (
            <button
              onClick={() => HandlePreview()}
              className="single-image-arrow-button-left"
            >
              <img
                src={ArrowBack}
                width={60}
                alt="back Arrow gallery, CHH | Portfolio"
              ></img>
            </button>
          )}
          <motion.figure
            drag="x"
            className="single-image-content"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) =>
              isMobilorTablet && MobilHadle(info.point.x)
            }
          >
            <GatsbyImage
              image={course.imageGallery[index].photo.asset.gatsbyImageData}
              alt={course.imageGallery[index].caption}
              objectFit="scale-down"
              className="fullsize-image"
            ></GatsbyImage>
          </motion.figure>

          {!isMobilorTablet && (
            <button
              onClick={() => HandleNext()}
              className="single-image-arrow-button-right"
            >
              <img
                src={ArrowForward}
                width={60}
                alt="forward arrow gallery, CHH | Portfolio"
              ></img>
            </button>
          )}
          {isMobilorTablet && (
            <footer className="single-image-body-mabil-footer">
              <p className="single-image-body-caption">
                {course.imageGallery[index].caption}
              </p>
              <span className="sinlge-image-number-caption">
                <p className="white-caption">
                  <span className="textYellow">{`${index + 1}`}</span>
                </p>
                <p className="white-caption">{`/${totalLenghtIndex}`}</p>
              </span>
            </footer>
          )}
          {/*<p className="white-caption">
              Descripción: {course.imageGallery[index].caption} | index:{" "}
              {index + 1}/{totalLenghtIndex},
            </p>*/}
        </div>
      </motion.article>
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
  isMobilorTablet,
}) {
  return (
    <motion.div
      className="single-image-header"
      initial={
        isMobilorTablet && { clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }
      }
      animate={isMobilorTablet && { clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
      exit={isMobilorTablet && { clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
      transition={{ duration: 1 }}
    >
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
          transitionPhoto={true}
          originPathname={location.pathname}
          replace={true}
        />
        <ShareButtons
          title={`${title} | CHH Portafolio`}
          url={location.href}
          twitterHandle={"CHH_Portafolio"}
          tags={["CHH"]}
        />
      </div>
    </motion.div>
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
