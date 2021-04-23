import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
                        : null
                    }
                    title={course.title}
                    mainImage={course.mainImage.asset.gatsbyImageData}
                    university={course.universities.name}
                    abstract={course.abstract}
                    year={course.year}
                    semester={course.semester}
                  ></Card>
                  <p>{course.mainImage.asset.path}</p>
                </Link>
              </span>
            ))}
          </div>
        )}

        {/*{courses.map((Course) => (
        <span key={Course.id}>
          <Link to={`/teaching/${Course.slug.current}`}>{Course.title}</Link>
          <GatsbyImage
            image={Course.mainImage.asset.gatsbyImageData}
          ></GatsbyImage>
        </span>
      ))}*/}
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
