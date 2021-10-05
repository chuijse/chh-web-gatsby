import React, { useState } from "react";
import { motion } from "framer-motion";

export function Picker(props) {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  function handleChange() {
    if (animation === false) {
      setAnimation(!animation);
      setOpen(!open);
    } else {
      setAnimation(false);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }

  return (
    <React.Fragment>
      <button onClick={() => handleChange()} className="pickerRoot">
        <div className="picker">
          <motion.div
            className="triangle"
            animate={{ rotate: animation ? 0 : -90 }}
          />
          <h2>{props.filter}</h2>
        </div>

        <motion.nav
          className="picker-nav"
          animate={{ opacity: animation ? 1 : 0, y: animation ? 0 : -60 }}
          exit={{ opacity: animation ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            animate={{ opacity: animation ? 1 : 0 }}
            className="picker-ul"
          >
            {open && props.children}
          </motion.ul>
        </motion.nav>
      </button>
    </React.Fragment>
  );
}

export function PickerItem(props) {
  return (
    <React.Fragment>
      {props.name === props.filter ? null : (
        <li>
          <button
            className="categoryButton"
            onClick={() => {
              props.onSelect(props.name);
            }}
          >
            {props.name}
          </button>
        </li>
      )}
    </React.Fragment>
  );
}
