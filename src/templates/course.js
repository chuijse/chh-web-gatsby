import React, { useEffect } from "react";
import { graphql } from "gatsby";
import DocumentTemplate from "../components/DocumentTemplate";
import Seo from "../components/Seo";

//const transition = [0.6, 0.01, -0.05, 0.9];
//dconst duration = 1.4;

const CourseArticle = ({ data, isMobil, isTablet, location, animationFinish }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const course = data?.sanityCourses;
  //console.log(`${course} esto es course`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Seo
        title={course.title}
        description={course.abstract}
        image={course.mainImage.asset.url}
      />
      <DocumentTemplate
        documentType="course"
        isTablet={isTablet}
        location={location}
        animationFinish={animationFinish}
        {...course}
      />
    </React.Fragment>
  );
};

export default CourseArticle;

export const query = graphql`
  query CourseTemplate($id: String!) {
    sanityCourses(id: { eq: $id }) {
      id
      abstract
      courseContent {
        name
      }
      role {
        name
      }
      title
      year
      semester
      _rawBody(resolveReferences: { maxDepth: 10 })
      universities {
        name
      }
      colleagues {
        name
        link
      }
      tecnologies {
        name
        link
      }
      slug {
        current
      }
      mainImage {
        caption
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          url
        }
      }
      imageGallery {
        photo {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            url
          }
        }
        caption
        slug {
          current
        }
      }
    }
  }
`;
