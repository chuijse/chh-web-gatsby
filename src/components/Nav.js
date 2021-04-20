import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const NavLink = props => {
  const [active, setActive] = useState(false)

  const updateActive = () => {
    if (active) {
      setTimeout(props.onActive, 200)
    }
  }

  useEffect(() => updateActive(), [active])

  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        setActive(isCurrent)
        return {
          style: {
            backgroundColor: isCurrent ? "orange" : "none",
            color: isCurrent ? "white" : "none",
          },
        }
      }}
    />
  )
}

const links = [
  { link: "/", name: "About" },
  { link: "/projects/", name: "Projects" },
  { link: "/teaching/", name: "Teaching" },
  { link: "/blog/", name: "Blog" },
  { link: "/contact/", name: "Contact" },
]

export default function Nav() {
  return (
    <>
      <div className="nav">
        {links.map((links, index) => (
          <div key={index} className="li">
            <NavLink to={links.link} onActive={() => console.log(links.name)}>
              {links.name}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}