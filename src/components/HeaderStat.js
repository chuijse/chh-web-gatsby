import React from "react";

export default function HeaderStat({ statClass, statName }) {
  return (
    <div className="header-stat">
      <p className="header-stat-class">{statClass}</p>
      <p className="header-stat-info">{statName}</p>
    </div>
  );
}
