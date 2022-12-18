import "./FooterMenu.scss";
import React from "react";

function FooterMenu() {
  return (
    <ul className="footer-menu">
      <li className="footer-menu__item"><a href="#" className="footer-menu__link">Как работает сервис?</a></li>
      <li className="footer-menu__item"><a href="#" className="footer-menu__link">Советы от SELFMADE</a></li>
      <li className="footer-menu__item"><a href="#" className="footer-menu__link">Пользовательское соглашение</a></li>
      <li className="footer-menu__item"><a href="#" className="footer-menu__link">Почему SELFMADE</a></li>
      <li className="footer-menu__item"><a href="#" className="footer-menu__link">Помощь и поддержка</a></li>
    </ul>
  );
}

export default FooterMenu;
