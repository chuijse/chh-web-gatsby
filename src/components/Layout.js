import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const historyPathId = [];

function Layout(props) {
  const [pathId, setPathId] = useState(null);
  const [right, setRight] = useState(null);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isMobil = useMediaQuery({ minWidth: 768 });

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
      <Nav
        setPathId={setPathId}
        currentUrl={props.location.pathname}
        isMobil={isMobil}
      />

      <AnimatePresence exitBeforeEnter>
        {React.cloneElement(props.children, {
          right: right,
          isMobil: isMobil,
          isTablet: isTabletOrMobile,
        })}
      </AnimatePresence>
    </div>
  );
}

export default Layout;
