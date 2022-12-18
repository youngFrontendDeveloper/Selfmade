import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";

function Header() {
  const logoClass = "logo";
  const imgClass = "logo__img";
  const width="120";
  const height="17.52"

  return (
    <header className="header">
      <div className="container container--align-center container--position-relative">
        <Logo logoClass={ logoClass } imgClass={ imgClass } width={width} height={height}/>
        <Login />
      </div>
    </header>
  );
}

export default Header;
