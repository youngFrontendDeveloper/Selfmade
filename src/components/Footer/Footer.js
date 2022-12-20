import "./Footer.scss";
import React from "react";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import FooterMenu from "../FooterMenu/FooterMenu";
import Container from "../Container/Container";

function Footer() {
  const logoClass = "logo logo--big";
  const imgClass = "logo__img logo__img--color-white";
  const width = "137";
  const height = "20";
  const containerClasses = "container";

  return (
    <footer className="footer">

      <div className="footer__top">
        <Container containerClasses={ containerClasses }>
          <div className="footer__inner">
            <Logo logoClass={ logoClass } imgClass={ imgClass } width={ width } height={ height }/>
            <Social/>
            <FooterMenu/>
          </div>
        </Container>
      </div>
      <div className="footer__bottom">
        <Container containerClasses={ containerClasses }>
          <div className="footer__inner footer__inner--bottom">
            <p className="footer__text">&copy; SELFMADE.TEAM 2022</p>
            <p className="footer__text"><span>ИНН 431207720494 /&nbsp; </span> <span> ОГРНИП 320508100324371</span></p>
            <p className="footer__text"><a href="#" className="footer__text-link">Политика конфиденциальности</a></p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
