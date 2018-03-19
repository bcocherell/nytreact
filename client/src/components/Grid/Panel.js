import React from "react";

export const Panel = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
