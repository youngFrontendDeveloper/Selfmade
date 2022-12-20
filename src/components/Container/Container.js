import "./Container.scss";
import React from "react";

function Container({ children, containerClasses }) {
  return (
    <div className={ containerClasses }>{ children } </div>
  );
}

export default Container;