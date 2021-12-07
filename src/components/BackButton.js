import React from "react";
import { navigate, Link } from "gatsby";
import BackArrow from "../images/backArrow.svg";

export default function BackButton({ text, path, id }) {
  return (
    <React.Fragment>
      <div className="back-button-root">
        <img src={BackArrow} alt="back arrow CHH"></img>
        <Link className="back-button" to={path} state={{ lastId: `${id}` }}>
          <span>{text}</span>
        </Link>
      </div>
    </React.Fragment>
  );
}
