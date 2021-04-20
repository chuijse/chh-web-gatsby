import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../style/index.scss"

export default function Home(props) {
  return (
    <>
      <Seo />
      <Layout>
        <div>Hello World!</div>
      </Layout>
    </>
  )
}
