import React from "react";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";

export default function Teaching({ data }) {
  const courses = data.allSanityCourses.nodes;
  return (
    <>
      <div className="mainTeaching">
        <div className="intro">
          <span className="centerText">
            <h1>Mi carrera docente</h1>
            <h2>Filtra por Universidad</h2>
          </span>
        </div>
        {!courses ? (
          <div>Loading...</div>
        ) : (
          <div className="teachingGrid">
            {courses.map((course) => (
              <span key={course.id}>
                <Link to={`/teaching/${course.slug.current}`}>
                  <Card
                    color={
                      course.universities.acronym === "UDD"
                        ? "card_UDD"
                        : course.universities.acronym === "UDP"
                        ? "card_UDP"
                        : course.universities.acronym === "UACH"
                        ? "card_UACH"
                        : null
                    }
                    title={course.title}
                    mainImage={course.mainImage.asset.gatsbyImageData}
                    mainCaption={course.mainImage.caption}
                    university={course.universities.acronym}
                    abstract={course.abstract}
                    year={course.year}
                    semester={course.semester}
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
