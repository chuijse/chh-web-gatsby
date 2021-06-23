import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";
import { Picker, PickerItem } from "../components/Picker";
import { AnimatePresence, motion } from "framer-motion";

export default function Teaching({ data }) {
  const [filter, setCategory] = useState("All");

  const courses = data.allSanityCourses.nodes;

  return (
    <>
      <div className="mainTeaching">
        <div className="intro">
          <span className="centerText">
            <h1>Mi carrera docente</h1>
            <div className="subHeader">
              <h2>Filtra por Universidad</h2>

              <Picker filter={filter}>
                <PickerItem
                  name={"All"}
                  onSelect={setCategory}
                  filter={filter}
                />
                <PickerItem
                  name={"UDD"}
                  onSelect={setCategory}
                  filter={filter}
                />
                <PickerItem
                  name={"UDP"}
                  onSelect={setCategory}
                  filter={filter}
                />
                <PickerItem
                  name={"UACH"}
                  onSelect={setCategory}
                  filter={filter}
                />
              </Picker>
            </div>
          </span>
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
                        transition={{ duration: 1 }}
                      >
                        <Card
                          color={
                            filteredCourse.universities.acronym === "UDD"
                              ? "card_UDD"
                              : filteredCourse.universities.acronym === "UDP"
                              ? "card_UDP"
                              : filteredCourse.universities.acronym === "UACH"
                              ? "card_UACH"
                              : null
                          }
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
    </>
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
