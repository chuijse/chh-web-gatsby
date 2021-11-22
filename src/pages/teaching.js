import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";
import Picker from "../components/Picker";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "../components/SmoothScroll";
//import SlidingAnimation from "../components/SlidingAnimation";

export default function Teaching({ data, right }) {
  const [filter, setCategory] = useState("All");

  const categories = [];
  const courses = data.allSanityCourses.nodes;

  courses.map((x) => {
    categories.push(x.universities.acronym);
  });
  let unicCategories = [...new Set(categories)];
  unicCategories.push("All");

  const container = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
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
      <motion.div className="mainTeaching" exit={{ opacity: 0 }}>
        <div className="intro">
          <motion.h1
            initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
            transition={{ duration: 0.5 }}
          >
            Docencia
          </motion.h1>
          <motion.div
            className="teaching-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="subHeader"
            initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
            transition={{ duration: 0.5 }}
          >
            <h2>Filtra por Universidad</h2>
          </motion.div>
          <Picker
            filter={filter}
            categories={unicCategories}
            onSelect={setCategory}
          />
        </div>

        {!courses ? (
          <div>Loading...</div>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className="teachingGrid"
              variants={container}
              animate="animate"
              initial="initial"
              exit="exit"
              key={`teachingGrid-${filter}`}
            >
              {courses
                .filter((course) =>
                  course.universities.acronym.includes(
                    filter === "All" ? "" : filter
                  )
                )
                .map((filteredCourse) => (
                  <motion.span
                    key={`card-course-${filteredCourse.id}`}
                    variants={item}
                  >
                    <Link to={`/teaching/${filteredCourse.slug.current}`}>
                      <Card
                        id={filteredCourse.id}
                        title={filteredCourse.title}
                        mainImage={
                          filteredCourse.mainImage.asset.gatsbyImageData
                        }
                        mainCaption={filteredCourse.mainImage.caption}
                        university={filteredCourse.universities.acronym}
                        abstract={filteredCourse.abstract}
                        year={filteredCourse.year}
                        semester={filteredCourse.semester}
                      ></Card>
                    </Link>
                  </motion.span>
                ))}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </React.Fragment>
  );
}

export const query = graphql`
  query TeachingPage {
    allSanityCourses(sort: { fields: [year], order: DESC }) {
      nodes {
        title
        id
        slug {
          current
        }
        year
        semester
        universities {
          name
          acronym
        }
        mainImage {
          caption
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            path
          }
        }
        abstract
      }
    }
  }
`;
