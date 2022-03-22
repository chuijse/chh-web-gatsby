import React, { useEffect, useState, useContext } from "react";
import { motion, useElementScroll } from "framer-motion";
import CourseBodyLinks from "../components/TemplateBodyLinks";
import CourseBodyDescription from "../components/TemplateBodyDescription";
import CourseHeaderInfo from "../components/TemplateHeaderInfo";
import CourseHeaderImage from "../components/TemplateHeaderImage";
import { PhotoTransitionContext } from "../Context/PhotoTransitionContext";



export default function DocumentTemplate({
  documentType,
  isTablet,
  title,
  universities,
  abstract,
  year,
  semester,
  mainImage,
  colleagues,
  tecnologies,
  portableText,
  imageGallery,
  location,
  slug,
  id,
  courseContent,
  role,
  _rawBody,
  animationFinish,
}) {
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [backButton, setBackButton] = useState("");
  const {p, setPhotoTransition} = useContext(PhotoTransitionContext)
  const [originPathname, setOriginPathname] = useState("");

  //console.log(_rawBody);

  /*if (location.state?.originPathname) {
    setOriginPathname(location.pathname) 
    console.log(originPathname)
  } else {
    setOriginPathname(location.state?.originPathname)
    console.log(originPathname)
  }*/


  //console.log(originPathname)


  /*window.onpopstate = function(event) {
    if(document.location.pathname === "/teaching" || originPathname === `/teaching` || originPathname === "start"){
      setPhotoTransition(false)
      alert("false: " + document.location.pathname +" "+ originPathname)
    } else {
      setPhotoTransition(true)
      alert("true: " + document.location.pathname +" "+ originPathname) 
    }
    //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  }*/

  //console.log(location.state)

  

  /*useEffect(()=>{
    console.log("animationFinish " + animationFinish)
    if(animationFinish === true){ 
    setPhotoTransition(false) 
    console.log("animationFinish " + animationFinish)
    }
  },[animationFinish])*/

  useEffect(() => {
    //
    switch (documentType) {
      case "course":
        setDescriptionTitle("Descripción del curso");
        setBackButton("Docencia");
        break;
    }
  }, []);

  return (
    <motion.article
      className="course-root"
      //exit={{ opacity: 0, backgroundColor: "#000" }}
      transition={{ duration: 0.5 }}
    >
      
      <div className="course-root-header">
        <div className="course-header">
          <CourseHeaderInfo
            isTablet={isTablet}
            title={title}
            universities={universities}
            abstract={abstract}
            year={year}
            semester={semester}
            contents={courseContent}
            role={role}
          />
          <CourseHeaderImage isTablet={isTablet} mainImage={mainImage} />
        </div>
      </div>
      <div className="course-root-body">
        <div className="course-body">
          <CourseBodyLinks
            colleagues={colleagues}
            tecnologies={tecnologies}
            title={title}
            location={location}
            backButton={backButton}
            id={id}
          />
          <CourseBodyDescription
            portableText={_rawBody}
            imageGallery={imageGallery}
            descriptionTitle={descriptionTitle}
            slug={slug}
            id={id}
            location={location}
          />
        </div>
      </div>
    </motion.article>
  );
}
