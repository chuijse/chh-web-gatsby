import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import PortableText from "../components/PortableText";
import ImageGallery from "../components/ImageGallery";

const CourseArticle = ({ data }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const course = data.sanityCourses;
  //console.log(`${course} esto es course`);
  return (
    <>
      <div className="mainCourse">
        <div className="layoutCourse">
          <div className="headerCourse">
            <h1>{course.title}</h1>
            <h2>
              {course.universities.name} / {course.year} / {course.semester}
              °semestre
            </h2>
          </div>
          <GatsbyImage
            image={course.mainImage.asset.gatsbyImageData}
            alt={course.mainImage.caption}
          ></GatsbyImage>
          <div className="courseInfo">
            <div className="courseStats">
              <div className="courseItem">
                <div className="courseContent">
                  <h3>Profesores del curso</h3>
                  {course.colleagues.map((colleagues, index) => (
                    <span key={index}>
                      <Button
                        name={colleagues.name}
                        link={colleagues.link}
                      ></Button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="courseItem">
                <div className="courseContent">
                  <h3>Tecnologias</h3>
                  <p>Software, Hardware, Herramientas o Tecnicas</p>
                  {course.tecnologies.map((tecnologies, index) => (
                    <span key={index}>
                      <Button
                        name={tecnologies.name}
                        link={tecnologies.link}
                      ></Button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="courseBody">
              <h4>Description del curso</h4>
              {course._rawBody && (
                <PortableText
                  blocks={course._rawBody}
                  imageOptions={{ fit: "max" }}
                ></PortableText>
              )}
              {/*{course.imageGallery.map((image, index) => (
                <span key={index}>
                  <GatsbyImage
                    image={image.asset.thumb}
                    alt={image.caption}
                  ></GatsbyImage>
                </span>
              ))}*/}
              <ImageGallery gallery={course.imageGallery}></ImageGallery>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseArticle;

export const query = graphql`
  query teachingTemplate($id: String!) {
    sanityCourses(id: { eq: $id }) {
      id
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
        _key
        _type
        current
      }
      mainImage {
        caption
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      imageGallery {
        asset {
          thumb: gatsbyImageData(placeholder: BLURRED, fit: CLIP)
          high: gatsbyImageData(fit: SCALE, placeholder: BLURRED)
        }
        caption
      }
    }
  }
`;
