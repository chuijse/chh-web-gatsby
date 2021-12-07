import React from "react";
import Layout from "./src/components/Layout";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
