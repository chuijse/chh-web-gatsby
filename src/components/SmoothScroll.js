import React, { useEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { globalHistory } from "@reach/router";

const SmoothScroll = ({ children, isNav }) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className={isNav ? "smooth-scroll-nav" : "smooth-scroll-body"}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
