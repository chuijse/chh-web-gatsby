import React, { useState } from "react";
import { motion } from "framer-motion";

export function Picker(props) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div onClick={() => setOpen(!open)}>
        <div className="picker">
          <motion.div
            className="triangle"
            animate={{ rotate: open ? 0 : -90 }}
          />
          <h2>{props.filter}</h2>
        </div>
        <nav className="picker-nav">
          <ul className="picker-ul">{open && props.children}</ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export function PickerItem(props) {
  return (
    <li
      onClick={() => {
        props.onSelect(props.name);
      }}
    >
      {props.name}
    </li>
  );
}
