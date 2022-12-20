import "./Header.scss";
import React from "react";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Container from "../Container/Container";

function Header() {
  const logoClass = "logo";
  const imgClass = "logo__img";
  const width = "120";
  const height = "17.52";
  const containerClasses = "container container--align-center container--position-relative";

  return (
    <header className="header">
      <Container containerClasses={ containerClasses }>
        <Logo logoClass={ logoClass } imgClass={ imgClass } width={ width } height={ height }/>
        <Login/>
      </Container>
    </header>
  );
}

export default Header;
