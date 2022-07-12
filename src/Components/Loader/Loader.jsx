import React from "react";
import "./styles.scss";

export const Loader = () => {
  return (
    <div className="center">
      <div className="ring"></div>
      <span>Loading...</span>
    </div>
  );
};
