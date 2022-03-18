import React from "react";
import { navigate, Link } from "gatsby";
import BackArrow from "../images/backArrow.svg";

export default function BackButton({ text, path, id, transitionPhoto = false }) {
  return (
    <React.Fragment>
      <div className="back-button-root">
        <Link className="back-button" to={path} state={{ lastId: `${id}`, transitionPhoto: transitionPhoto}}>
          <img src={BackArrow} alt="back arrow CHH"></img>
          <span>{text}</span>
        </Link>
      </div>
    </React.Fragment>
  );
}
