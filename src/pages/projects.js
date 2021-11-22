import React /*useState, useEffect */ from "react";
import Seo from "../components/Seo";
//import { motion, AnimatePresence } from "framer-motion";
import SlidingAnimation from "../components/SlidingAnimation";

export default function Projects({ right }) {
  return (
    <React.Fragment>
      <SlidingAnimation right={right}>
        <React.Fragment>
          <Seo title="Projects" keywords={["projects"]} />
          <div
            style={{
              width: "80vw",
              margin: "auto",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Projects</h1>
          </div>
        </React.Fragment>
      </SlidingAnimation>
    </React.Fragment>
  );
}
