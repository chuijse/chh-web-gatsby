import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../style/index.scss";
import SmoothScroll from "../components/SmoothScroll";

import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

//const historyPathId = [];

function Layout(props) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobil = useMediaQuery({ minWidth: 768 });

  const location = props.location.pathname;

  const childrenWithProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, { isMobile: isMobil, isTablet: isTabletOrMobile })
  );

  return (
    <div className="layout">
      {isMobil && <Nav isMobil={isMobil} location={location} />}
      <AnimatePresence exitBeforeEnter>{childrenWithProps}</AnimatePresence>
    </div>
  );
}

export default Layout;
