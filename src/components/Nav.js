import React, { useEffect, useState, useRef } from "react";
import { navigate } from "gatsby";
import Logo from "./Logo";
import { motion, AnimateSharedLayout } from "framer-motion";

const routes = [
  { name: "About", path: "/", partialy: false },
  { name: "Projects", path: "/projects", partialy: true },
  { name: "Teaching", path: "/teaching", partialy: true },
  { name: "blog", path: "/blog", partialy: true },
  { name: "contact", path: "/contact", partialy: false },
];

export default function Nav({ setPathId, currentUrl, isMobil }) {
  const [selected, setSelected] = useState(0);

  return (
    <React.Fragment>
      <div className="topBar">
        <div className="line" />

        <div className="navLogo">
          {isMobil && <Logo />}
          <nav className="layoutNav">
            <AnimateSharedLayout>
              {routes.map((r, i) => (
                <ul key={`nav-ul-${i}`}>
                  {i > 0 && isMobil ? <li> | </li> : null}
                  <li>
                    <Item
                      routeId={i}
                      name={r.name}
                      path={r.path}
                      partialy={r.partialy}
                      currentUrl={currentUrl}
                      setPathId={setPathId}
                      isSelected={selected === `route-id-${i}`}
                      onActive={() => setSelected(`route-id-${i}`)}
                    />
                  </li>
                </ul>
              ))}
            </AnimateSharedLayout>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

function Item({
  name,
  isSelected,
  onActive,
  path,
  currentUrl,
  setPathId,
  routeId,
}) {
  const [active, setActive] = useState(false);

  useEffect(() => active && onActive, [active]);

  useEffect(() => {
    if (path !== "/") {
      if (currentUrl.startsWith(path)) {
        setActive(true);
        //console.log(`true ${path}`);
        setTimeout(() => setActive(false), 5);
      }
    } else if (currentUrl === path) {
      setActive(true);
      //console.log(`true ${path}`);
      setTimeout(() => setActive(false), 5);
    }
  }, [currentUrl]);

  function handleNavigation(routeId, path) {
    setPathId(routeId);
    setTimeout(() => navigate(path), 100);
  }
  return (
    <div
      className={
        path !== "/"
          ? currentUrl.startsWith(path)
            ? "activeNavButton"
            : "navButton"
          : currentUrl === path
          ? "activeNavButton"
          : "navButton"
      }
      onClick={() => handleNavigation(routeId, path)}
    >
      {isSelected && (
        <motion.div
          layoutId="triangle"
          className="triangle"
          transition={spring}
        />
      )}
      {name}
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
