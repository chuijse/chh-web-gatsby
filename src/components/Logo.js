import React from "react";
import logo from "../images/logo.svg";
import logoText from "../images/logoText.svg";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Cristian Huijse heise logo" height="40px" />
        <img src={logoText} alt="Cristian Huijse heise Texto" height="40px" />
      </div>
    </>
  );
};

export default Logo;
