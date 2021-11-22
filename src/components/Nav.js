import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import { motion, AnimateSharedLayout } from "framer-motion";

const routes = [
  { name: "About", path: "/", partialy: false },
  { name: "Projects", path: "/projects", partialy: true },
  { name: "Teaching", path: "/teaching", partialy: true },
  { name: "blog", path: "/blog", partialy: true },
  { name: "contact", path: "/contact", partialy: false },
];

export default function Nav({ isMobil, location }) {
  const [selected, setSelected] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
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
                      <ChhLink
                        routeId={i}
                        name={r.name}
                        path={r.path}
                        partialy={r.partialy}
                        location={location}
                        isSelected={selected === `route-id-${i}`}
                        setSelected={setSelected}
                      />
                    </li>
                  </ul>
                ))}
              </AnimateSharedLayout>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  );
}

function ChhLink({
  name,
  path,
  partialy,
  isSelected,
  routeId,
  setSelected,
  location,
}) {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const [active, setActive] = useState();

  useEffect(() => active && setSelected(`route-id-${routeId}`), [active]);

  useEffect(() => {
    if (path !== "/") {
      if (location.startsWith(path)) {
        setActive(true);
        //console.log(`true ${path}`);
        setTimeout(() => setActive(false), 5);
      }
    } else if (location === path) {
      setActive(true);
      //console.log(`true ${path}`);
      setTimeout(() => setActive(false), 5);
    }
  }, [location]);

  return (
    <Link
      to={path}
      className="navButton"
      partiallyActive={partialy}
      activeClassName="activeNavButton"
    >
      {isSelected && (
        <motion.div
          layoutId="triangle"
          className="triangle"
          transition={spring}
        />
      )}
      {name}
    </Link>
  );
}
