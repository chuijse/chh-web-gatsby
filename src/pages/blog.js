import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Blog({ data }) {
  const posts = data.allSanityPost.nodes;
  return (
    <>
      <div>Blog</div>
      {posts.map((posts) => (
        <span key={posts.id}>
          <Link to={`/blog/${posts.slug.current}`}>{posts.title}</Link>
          <GatsbyImage
            image={posts.mainImage.asset.gatsbyImageData}
          ></GatsbyImage>
        </span>
      ))}
    </>
  );
}

export const query = graphql`
  query blogPage {
    allSanityPost {
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
            gatsbyImageData
          }
        }
      }
    }
  }
`;
