import React, { useEffect, useState, useRef } from "react";
import { navigate } from "gatsby";
import Logo from "./Logo";
import { motion, AnimateSharedLayout } from "framer-motion";

const routes = [
  { name: "About", path: "/", partialy: false, id: 0 },
  { name: "Projects", path: "/projects", partialy: true, id: 1 },
  { name: "Teaching", path: "/teaching", partialy: true, id: 2 },
  { name: "blog", path: "/blog", partialy: true, id: 3 },
  { name: "contact", path: "/contact", partialy: false, id: 4 },
];

export default function NavCopy({ setPathId, currentUrl }) {
  const [selected, setSelected] = useState(0);

  console.log(selected);

  return (
    <React.Fragment>
      <div className="topBar">
        <div className="line" />

        <div className="navLogo">
          <Logo />
          <nav className="layoutNav">
            <AnimateSharedLayout>
              {routes.map((r) => (
                <ul>
                  {r.id > 0 ? <li> | </li> : null}
                  <li>
                    <Item
                      key={r.id}
                      routeId={r.id}
                      name={r.name}
                      path={r.path}
                      partialy={r.partialy}
                      currentUrl={currentUrl}
                      setPathId={setPathId}
                      isSelected={selected === r.id}
                      onActive={() => setSelected(r.id)}
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
