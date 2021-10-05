import React, { useState, useEffect, useLayoutEffect } from "react";
import Nav from "./Nav";
import NavCopy from "./NavCopy";
import { motion, AnimatePresence } from "framer-motion";
import { OnRouteUpdate } from "../../gatsby-browser";
import { globalHistory } from "@reach/router";

const historyPathId = [];

function Layout(props) {
  const [pathId, setPathId] = useState(null);
  const [right, setRight] = useState(null);

  useEffect(() => {
    historyPathId.unshift(pathId);
    if (historyPathId.length === 3) {
      historyPathId.pop();
    }
    if (historyPathId[0] > historyPathId[1]) {
      setRight(true);
    } else {
      setRight(false);
    }
  }, [pathId]);

  return (
    <div className="layout">
      {/* <Nav setPathId={setPathId} currentUrl={props.location.pathname} />*/}
      <NavCopy setPathId={setPathId} currentUrl={props.location.pathname} />
      <AnimatePresence exitBeforeEnter>
        {React.cloneElement(props.children, { right: right })}
      </AnimatePresence>
    </div>
  );
}

export default Layout;
