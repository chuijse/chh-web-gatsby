import React from "react";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <TopBar />
      <div>{children}</div>
    </div>
  );
}
