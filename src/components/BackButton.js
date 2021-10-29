import React from "react";
import { navigate } from "gatsby";
import BackArrow from "../images/backArrow.svg";

export default function BackButton({ text, path }) {
  return (
    <React.Fragment>
      <div className="back-button-root">
        <img src={BackArrow} alt="back arrow CHH"></img>
        <button className="back-button" onClick={() => navigate(path)}>
          {text}
        </button>
      </div>
    </React.Fragment>
  );
}
