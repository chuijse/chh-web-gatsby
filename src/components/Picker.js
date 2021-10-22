import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Picker({ filter, onSelect, categories }) {
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
          <h2>{filter}</h2>
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
            {open &&
              categories.map((x, i) => (
                <PickerItem name={x} onSelect={onSelect} filter={filter} />
              ))}
          </motion.ul>
        </motion.nav>
      </button>
    </React.Fragment>
  );
}

export function PickerItem({ filter, onSelect, name }) {
  return (
    <React.Fragment>
      {name === filter ? null : (
        <li>
          <button
            className="categoryButton"
            onClick={() => {
              onSelect(name);
            }}
          >
            {name}
          </button>
        </li>
      )}
    </React.Fragment>
  );
}
