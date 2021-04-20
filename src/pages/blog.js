import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Blog({data}) {
    const posts = data.allSanityCourses.nodes
  return (
    <>
      <Layout>
        <div>Blog</div>
        {posts.map((posts, index) => (
            <span key={index}>
                
                <Link to={`/blog/${posts.slug.current}`}>{posts.title}</Link>
                <p>{posts.universities.name}</p>
                <p>{posts.mainImage.asset.path}</p>
                <p>{posts.mainImage.caption}</p>
        </span>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
query blogPage {
    allSanityCourses {
      nodes {
        abstract
        title
        slug {
          _key
          _type
          current
        }
        universities {
          name
        }
        mainImage {
          asset {
            path
          }
          caption
        }
      }
    }
  }`