import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../style/index.scss";
import SmoothScroll from "../components/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavViewContext } from "../Context/NavViewContext";

//const historyPathId = [];

function Layout(props) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobil = useMediaQuery({ maxWidth: 768 });

  const location = props.location.pathname;

  const childrenWithProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      isMobile: isMobil,
      isTablet: isTabletOrMobile,
    })
  );

  const [navView, setNavView] = useState(true);

  return (
    <NavViewContext.Provider value={{ navView, setNavView }}>
      <div className="layout">
        {navView && <Nav isMobil={isMobil} location={location} />}
        <AnimatePresence exitBeforeEnter>{childrenWithProps}</AnimatePresence>
      </div>
    </NavViewContext.Provider>
  );
}

export default Layout;
