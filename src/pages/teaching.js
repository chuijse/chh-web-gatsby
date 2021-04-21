import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Teaching({ data }) {
  const courses = data.allSanityCourses.nodes;
  return (
    <>
      <div>Teaching</div>
      {courses.map((Course) => (
        <span key={Course.id}>
          <Link to={`/teaching/${Course.slug.current}`}>{Course.title}</Link>
          <GatsbyImage
            image={Course.mainImage.asset.gatsbyImageData}
          ></GatsbyImage>
        </span>
      ))}
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
          _key
          _type
          current
        }
        mainImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
