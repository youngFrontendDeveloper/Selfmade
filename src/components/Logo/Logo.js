import "./Logo.scss";
import React from "react";
import { ReactComponent as LogoImg } from "./img/Logo.svg";

function Logo({ logoClass, imgClass, width, height }) {
  return (
    <a href="/" className={ logoClass }>
      <LogoImg className={ imgClass } width={ width } height={ height }/>
    </a>
  );
}

export default Logo;
