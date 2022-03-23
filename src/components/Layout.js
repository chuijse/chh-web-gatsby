import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "../style/index.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavViewContext } from "../Context/NavViewContext";
import { PhotoTransitionContext } from "../Context/PhotoTransitionContext"
import {
  createMemorySource,
  createHistory
} from "@reach/router"




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


const history = []


function Layout(props) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobil = useMediaQuery({ maxWidth: 768 });
  const [animationFinish, setAnimationFinish] = useState(false)
  const [navView, setNavView] = useState(true);
  const [photoTransition, setPhotoTransition] = useState(false);
  //const [history, setHistory] = useState([]) 

  /*useEffect(()=>{
    setHistory([ props.location.pathname, ...history, ])
    if (history.length >= 2){
      setHistory((history)=>history.slice(0, 2))
    }
  },[props.location.pathname])*/

  // listen to the browser history
let history1 = createHistory(window)

console.log(history1)


  const childrenWithProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      isMobile: isMobil,
      isTablet: isTabletOrMobile,
      history: history
    })
  );

  history.unshift(props.location.pathname)
  if (history.length > 2 ){
    history.pop()
  }
  //console.log(history)

  window.onpopstate = function(event) {
    alert(" va hacia " + props.location.pathname + " desde " + history[1])
  }


  return (
    <NavViewContext.Provider value={{ navView, setNavView }}>
      <PhotoTransitionContext.Provider value={{ photoTransition, setPhotoTransition }}>
      <div className="layout">
        {navView && <Nav isMobil={isMobil} location={props.location.pathname} />}
            <AnimatePresence exitBeforeEnter>
              <motion.div key={props.location.pathname}>
                  <motion.div
                    //initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
                    exit={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    transition={{ duration: 0.75 }}
                    style={{
                      display: "flex",
                      position: "fixed",
                      background: "#000",
                      height: "100%",
                      width: "100%",
                      zIndex: "100",
                      opacity: photoTransition ? 1 : 0 
                    }}
                  />
                <motion.main
                  variants={!photoTransition && regularTransition}
                  initial={!photoTransition ? "initial" : { opacity: 1 }}
                  animate={!photoTransition ? "enter" : { opacity: 1 }}
                  exit={!photoTransition ? "exit" : { opacity: 1 }}
                >
                  {childrenWithProps}
                </motion.main>
              </motion.div>
            </AnimatePresence>
          
      </div>
      </PhotoTransitionContext.Provider>
    </NavViewContext.Provider>
  );
}

export default Layout;
