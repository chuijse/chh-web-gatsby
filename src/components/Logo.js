import React from "react";
import logo from "../images/logo.svg";
import logoText from "../images/logoText.svg";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Cristian Huijse heise logo" />
        <img src={logoText} alt="Cristian Huijse heise Texto" />
      </div>
    </>
  );
};

export default Logo;
