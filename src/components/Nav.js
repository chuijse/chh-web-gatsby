import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";

import Triangle from "./Traingle";
import Logo from "./Logo";

const NavLink = (props) => {
  const [active, setActive] = useState(false);

  const updateActive = () => {
    if (active) {
      setTimeout(props.onActive, 200);
    }
  };

  useEffect(() => updateActive(), [active]);

  const isPartiallyTrue = ({ isCurrent, isPartiallyCurrent }) => {
    setActive(isCurrent);
    return isPartiallyCurrent || isCurrent ? { className: "activeNav" } : {};
  };

  const isPartiallyFalse = ({ isCurrent }) => {
    setActive(isCurrent);
    return isCurrent ? { className: "activeNav" } : {};
  };

  return props.ispartially === "true" ? (
    <Link getProps={isPartiallyTrue} {...props} />
  ) : (
    <Link getProps={isPartiallyFalse} {...props} />
  );
};

export default function Nav() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  const [position, setPosition] = useState(0);

  return (
    <>
      <Triangle xPosition={position} />

      <div className="navLogo">
        <Logo />

        <div className="nav">
          <li>
            <div ref={inputRef1}>
              <NavLink
                to="/"
                ispartially="false"
                onActive={() => setPosition(inputRef1)}
              >
                About
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <div>|</div>
            </div>
          </li>
          <li>
            <div ref={inputRef2}>
              <NavLink
                to="/projects/"
                ispartially="true"
                onActive={() => setPosition(inputRef2)}
              >
                Projects
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <div>|</div>
            </div>
          </li>
          <li>
            <div ref={inputRef3}>
              <NavLink
                to="/teaching/"
                ispartially="true"
                onActive={() => setPosition(inputRef3)}
              >
                Teaching
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <div>|</div>
            </div>
          </li>
          <li>
            <div ref={inputRef4}>
              <NavLink
                to="/blog/"
                ispartially="true"
                onActive={() => setPosition(inputRef4)}
              >
                blog
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <div>|</div>
            </div>
          </li>
          <li>
            <div ref={inputRef5}>
              <NavLink
                to="/contact/"
                ispartially="false"
                onActive={() => setPosition(inputRef5)}
              >
                Contact
              </NavLink>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}
