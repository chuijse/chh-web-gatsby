import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage} from 'gatsby-plugin-image'
import Nav from "../components/Nav"


const BlogArticle = ({data}) => {
    //const { data, errors } = props;
    //const post = data && data.post;
    const course = data.sanityCourses
    console.log(`${course} esto es course`)
    return(
        <>
        <Nav />
        <h1>{course.title}</h1>
        <GatsbyImage image={course.mainImage.asset.gatsbyImageData} />
        

        </>
    )
}

export default BlogArticle

export const query = graphql`
query teachingTemplate ($id: String!)  {
    sanityCourses(id: { eq: $id }) {
      id
       title
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
  }`