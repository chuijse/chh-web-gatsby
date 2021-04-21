import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

/*const NavLink = props => {
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
}*/



const NavLink = props => {
  const [active, setActive] = useState(false)

  const updateActive = () => {
    if (active) {
      setTimeout(props.onActive, 200)
    }
  }

  useEffect(() => updateActive(), [active])

  const isPartiallyTrue = ({ isCurrent, isPartiallyCurrent }) => {
    setActive(isCurrent)
    return isPartiallyCurrent || isCurrent ? { className: "activeNav" }: {}
    
  }

  const isPartiallyFalse = ({ isCurrent }) => {
    setActive(isCurrent)
    return  isCurrent ? { className: "activeNav" }: {}
    
  }
  
  return(
  props.isPartially ?
  <Link getProps={isPartiallyTrue} {...props}/> 
  :
  <Link getProps={isPartiallyFalse} {...props}/>
  )
}



const links = [
  { link: "/", name: "About", partially: false },
  { link: "/projects/", name: "Projects", partially: true },
  { link: "/teaching/", name: "Teaching", partially: true },
  { link: "/blog/", name: "Blog", partially: true },
  { link: "/contact/", name: "Contact", partially: false },
]

export default function Nav() {
  return (
    <>
      <div className="nav">
        {links.map((links, index) => (
          <div key={index} className="li">
            <NavLink to={links.link} isPartially={links.partially} onActive={(()=>(console.log(links.name)))}>
              {links.name}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}