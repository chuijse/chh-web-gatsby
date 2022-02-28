import React, { useState, useEffect } from "react";
import { Link, graphql, navigate } from "gatsby";
import Card from "../components/Card";
import Picker from "../components/Picker";
import { AnimatePresence, motion } from "framer-motion";
import { scroller } from "react-scroll";
import Seo from "../components/Seo";

//import SlidingAnimation from "../components/SlidingAnimation";

export default function Teaching({ data, location }) {
  const [filter, setCategory] = useState("All");

  const categories = [];
  const courses = data.allSanityCourses.nodes;

  courses.map((x) => {
    categories.push(x.universities.acronym);
  });
  let unicCategories = [...new Set(categories)];
  unicCategories.push("All");

  useEffect(() => {
    if (location.state?.lastId) {
      scrollTo(location.state.lastId);
      console.log(location.state.lastId);
    }
  }, []);

  const container = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 1,
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

  function scrollTo(id) {
    scroller.scrollTo(id, {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutCubic",
    });
  }

  return (
    <React.Fragment>
      <Seo title="Teaching" />
      <article className="mainTeaching">
        <section className="intro">
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
        </section>

        {!courses ? (
          <div>Loading...</div>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.section
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
                  <motion.div
                    key={`card-course${filteredCourse.id}`}
                    id={`card-course${filteredCourse.id}`}
                    variants={item}
                  >
                    <Link to={`/teaching/${filteredCourse.slug.current}`}>
                      <Card
                        id={filteredCourse.id}
                        title={filteredCourse.title}
                        role={filteredCourse.role.name}
                        contents={filteredCourse.courseContent}
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
                  </motion.div>
                ))}
            </motion.section>
          </AnimatePresence>
        )}
      </article>
    </React.Fragment>
  );
}

export const query = graphql`
  query TeachingPage {
    allSanityCourses(sort: { fields: [year], order: DESC }) {
      nodes {
        title
        courseContent {
          name
        }
        role {
          name
        }
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
