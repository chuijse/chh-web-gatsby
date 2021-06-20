import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";
import { Picker, PickerItem } from "../components/Picker";

export default function Teaching({ data }) {
  const [filter, setCategory] = useState("All");

  const courses = data.allSanityCourses.nodes;

  return (
    <>
      <div className="mainTeaching">
        <div className="intro">
          <span className="centerText">
            <h1>Mi carrera docente</h1>
            <div>
              <h2>Filtra por Universidad</h2>

              <Picker filter={filter}>
                <PickerItem name={"All"} onSelect={setCategory} />
                <PickerItem name={"UDD"} onSelect={setCategory} />
                <PickerItem name={"UDP"} onSelect={setCategory} />
                <PickerItem name={"UACH"} onSelect={setCategory} />
              </Picker>
            </div>
          </span>
        </div>

        {!courses ? (
          <div>Loading...</div>
        ) : (
          <div className="teachingGrid">
            {courses
              .filter((course) =>
                course.universities.acronym.includes(
                  filter === "All" ? "" : filter
                )
              )
              .map((filteredCourse) => (
                <span key={filteredCourse.id}>
                  <Link to={`/teaching/${filteredCourse.slug.current}`}>
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
                      mainImage={filteredCourse.mainImage.asset.gatsbyImageData}
                      mainCaption={filteredCourse.mainImage.caption}
                      university={filteredCourse.universities.acronym}
                      abstract={filteredCourse.abstract}
                      year={filteredCourse.year}
                      semester={filteredCourse.semester}
                    ></Card>
                  </Link>
                </span>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export const query = graphql`
  query TeachingPage {
    allSanityCourses {
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
