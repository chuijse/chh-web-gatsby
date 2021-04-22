import React from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import "../style/index.scss";
import Arrow from "../components/about/Arrow";
import Hola from "../components/about/Hola";
import IntroText from "../components/about/IntroText";

export default function Home(props) {
  return (
    <>
      <Seo />
      <motion.div exit={{ opacity: 0 }}>
        <div className="workIntro">
          <div className="layout">
            <Hola />
            <IntroText />
            <motion.div
              className="arrowBotom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7, duration: 1 }}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Arrow />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
