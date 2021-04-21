import React from "react";
import Seo from "../components/Seo";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Seo title="Projects" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Projects
      </motion.div>
    </>
  );
}
