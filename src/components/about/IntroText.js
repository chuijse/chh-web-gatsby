import React from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";

const sentence1 =
  "Bienvenido a mi web, siempre he visto el diseño como una disciplina transversal, por este motivo mi trabajo como ";
const sentence2 = " y docente universitario ";
const sentence3 =
  "siempre se ha visto envuelto en el uso de tecnologías que vinculen la ";
const sentence4 = "ciencia de la computación con el ";
const sentence5 = " Los invito a ver mi trabajo a continuación.";

const parrafo1 = sentence1.split(" ");
const parrafo2 = sentence2.split(" ");
const parrafo3 = sentence3.split(" ");
const parrafo4 = sentence4.split(" ");
const parrafo5 = sentence5.split(" ");

const TextHola = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const container = {
    initial: { y: 0 },
    animate: {
      y: 0,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    initial: { y: 0, scale: 1, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { transition, ...transition },
    },
  };

  //&nbsp; space !

  return (
    <>
      <motion.div>
        <motion.p
          initial="initial"
          animate="animate"
          variants={container}
          className="importantText"
        >
          {parrafo1.map((words) => (
            <motion.span variants={item}>{words}&nbsp;</motion.span>
          ))}
          <motion.span variants={item} className="strongYellow">
            diseñador
          </motion.span>
          {parrafo2.map((words) => (
            <motion.strong variants={item}>{words}&nbsp;</motion.strong>
          ))}
          {parrafo3.map((words) => (
            <motion.span variants={item}>{words}&nbsp;</motion.span>
          ))}
          {parrafo4.map((words) => (
            <motion.strong variants={item}>{words}&nbsp;</motion.strong>
          ))}
          <motion.span variants={item} className="strongYellow">
            diseñado.
          </motion.span>
          {parrafo5.map((words) => (
            <motion.span variants={item}>{words}&nbsp;</motion.span>
          ))}
        </motion.p>
      </motion.div>
    </>
  );
};

export default TextHola;
