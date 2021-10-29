import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";
import Picker from "../components/Picker";
import { AnimatePresence, motion } from "framer-motion";
import SlidingAnimation from "../components/SlidingAnimation";

export default function Teaching({ data, right }) {
  const [filter, setCategory] = useState("All");
  const categories = [];
  const courses = data.allSanityCourses.nodes;

  courses.map((x, i) => {
    categories.push(x.universities.acronym);
  });
  let unicCategories = [...new Set(categories)];
  unicCategories.push("All");
  console.log(categories);

  return (
    <React.Fragment>
      <SlidingAnimation right={right}>
        <div className="mainTeaching">
          <div className="intro">
            <h1>Docencia</h1>
            <div className="teaching-line" />
            <div className="subHeader">
              <h2>Filtra por Universidad</h2>

              <Picker
                filter={filter}
                categories={unicCategories}
                onSelect={setCategory}
              />
            </div>
          </div>

          {!courses ? (
            <div>Loading...</div>
          ) : (
            <div className="teachingGrid">
              <AnimatePresence exitBeforeEnter>
                {courses
                  .filter((course) =>
                    course.universities.acronym.includes(
                      filter === "All" ? "" : filter
                    )
                  )
                  .map((filteredCourse) => (
                    <span key={filteredCourse.id}>
                      <Link to={`/teaching/${filteredCourse.slug.current}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 100 }}
                          transition={{ delay: 1, duration: 2 }}
                        >
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
                        </motion.div>
                      </Link>
                    </span>
                  ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </SlidingAnimation>
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
