import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogArticle = ({ data }) => {
  //const { data, errors } = props;
  //const post = data && data.post;
  const post = data.sanityPost;
  console.log(`${post} esto es post`);
  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
};

export default BlogArticle;

export const query = graphql`
  query blogTemplate($id: String!) {
    sanityPost(id: { eq: $id }) {
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
  }
`;
