import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../style/index.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavViewContext } from "../Context/NavViewContext";

//const historyPathId = [];

const duration = 0.5;

const regularTransition = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

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
        <AnimatePresence exitBeforeEnter>
          <motion.div key={location}>
            {!navView && (
              <motion.div
                initial={{ opaclipPath: "inset(0% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
                exit={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  position: "fixed",
                  background: "#000",
                  height: "100%",
                  width: "100%",
                  zIndex: "100",
                }}
              />
            )}
            <motion.main
              variants={navView && regularTransition}
              initial={navView ? "initial" : { opacity: 1 }}
              animate={navView ? "enter" : { opacity: 1 }}
              exit={navView ? "exit" : { opacity: 1 }}
            >
              {childrenWithProps}
            </motion.main>
          </motion.div>
        </AnimatePresence>
      </div>
    </NavViewContext.Provider>
  );
}

export default Layout;
