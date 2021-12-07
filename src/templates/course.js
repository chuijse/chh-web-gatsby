import React from "react";
import { graphql } from "gatsby";
import DocumentTemplate from "../components/DocumentTemplate";
import Seo from "../components/Seo";

//const transition = [0.6, 0.01, -0.05, 0.9];
//dconst duration = 1.4;

const CourseArticle = ({ data, isMobil, isTablet, location }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const course = data?.sanityCourses;
  //console.log(`${course} esto es course`);

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
        title={course.title}
        mainImage={course.mainImage}
        universities={course.universities}
        abstract={course.abstract}
        year={course.year}
        semester={course.semester}
        colleagues={course.colleagues}
        tecnologies={course.tecnologies}
        title={course.title}
        location={location}
        portableText={course._rawBody}
        imageGallery={course.imageGallery}
        slug={course.slug.current}
        id={course.id}
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
