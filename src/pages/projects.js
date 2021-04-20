import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Projects
        </motion.div>
      </Layout>
    </>
  )
}