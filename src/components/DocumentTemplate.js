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
}) {
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [backButton, setBackButton] = useState("");

  useEffect(() => {
    switch (documentType) {
      case "course":
        setDescriptionTitle("Descripción del curso");
        setBackButton("Docencia");
        break;
    }
  }, []);

  return (
    <motion.div className="course-root" exit={{ opacity: 0 }}>
      <div className="course-root-header">
        <div className="course-header">
          <CourseHeaderInfo
            isTablet={isTablet}
            title={title}
            universities={universities}
            abstract={abstract}
            year={year}
            semester={semester}
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
          />
          <CourseBodyDescription
            portableText={portableText}
            imageGallery={imageGallery}
            descriptionTitle={descriptionTitle}
          />
        </div>
      </div>
    </motion.div>
  );
}
