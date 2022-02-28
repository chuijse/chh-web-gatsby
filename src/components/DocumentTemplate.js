import React, { useEffect, useState } from "react";
import { motion, useElementScroll } from "framer-motion";
import CourseBodyLinks from "../components/TemplateBodyLinks";
import CourseBodyDescription from "../components/TemplateBodyDescription";
import CourseHeaderInfo from "../components/TemplateHeaderInfo";
import CourseHeaderImage from "../components/TemplateHeaderImage";

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
}) {
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [backButton, setBackButton] = useState("");

  console.log(_rawBody);

  useEffect(() => {
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
      {/*<motion.div
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
        exit={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          position: "fixed",
          background: "#000",
          height: "100%",
          width: "100%",
          zIndex: 100,
        }}
      />*/}
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
