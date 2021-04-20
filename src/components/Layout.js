import React from "react"
import { Link } from "gatsby"

import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div>{children}</div>
    </div>
  )
}