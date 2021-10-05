import React, { useEffect, useState, useRef } from "react";
import { Link, navigate } from "gatsby";
import { globalHistory } from "@reach/router";
import Triangle from "./Traingle";
import Logo from "./Logo";

const routes = [
  { name: "About", path: "/", partialy: false, id: 0 },
  { name: "Projects", path: "/projects", partialy: true, id: 1 },
  { name: "Teaching", path: "/teaching", partialy: true, id: 2 },
  { name: "blog", path: "/blog", partialy: true, id: 3 },
  { name: "contact", path: "/contact", partialy: false, id: 4 },
];

export default function Nav({ setPathId, currentUrl }) {
  const [position, setPosition] = useState(0);
  const itemEls = useRef([]);

  return (
    <React.Fragment>
      <div className="topBar">
        <div className="line" />
        <Triangle xPosition={position} />
        <div className="navLogo">
          <Logo />
          <div className="nav">
            {routes.map((route) => (
              <span key={route.id}>
                {route.id === 0 ? null : <li>|</li>}
                <li>
                  <div ref={(ref) => (itemEls.current[route.id] = ref)}>
                    <ChhLink
                      routeId={route.id}
                      routePath={route.path}
                      currentUrl={currentUrl}
                      setPathId={setPathId}
                      onActive={() => setPosition(itemEls.current[route.id])}
                    >
                      {route.name}
                    </ChhLink>
                  </div>
                </li>
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function ChhLink({
  routeId,
  routePath,
  currentUrl,
  setPathId,
  children,
  onActive,
}) {
  const [active, setActive] = useState(false);

  const updateActive = () => {
    if (active) {
      setTimeout(onActive, 300);
    }
  };

  useEffect(() => updateActive(), [active]);

  useEffect(() => {
    if (routePath !== "/") {
      if (currentUrl.startsWith(routePath)) {
        setActive(true);
        //console.log(`true ${routePath}`);
        setTimeout(() => setActive(false), 5);
      }
    } else if (currentUrl === routePath) {
      setActive(true);
      //console.log(`true ${routePath}`);
      setTimeout(() => setActive(false), 5);
    }
  }, [currentUrl]);

  function handleNavigation(routeId, routePath) {
    setPathId(routeId);
    setTimeout(() => navigate(routePath), 200);
  }

  return (
    <div
      className={
        routePath !== "/"
          ? currentUrl.startsWith(routePath)
            ? "activeNavButton"
            : "navButton"
          : currentUrl === routePath
          ? "activeNavButton"
          : "navButton"
      }
      onClick={() => handleNavigation(routeId, routePath, onActive)}
    >
      {children}
    </div>
  );
}
