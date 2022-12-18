import "./Management.scss";
import React from "react";
import { ReactComponent as Portfolio } from "./img/portfolio.svg";
import { ReactComponent as Awards } from "./img/awards.svg";
import { ReactComponent as Heart } from "./img/heart.svg";
import { ReactComponent as Account } from "./img/account.svg";
import { ReactComponent as Level } from "./img/level.svg";
import { ReactComponent as Premium } from "./img/premium.svg";
import { ReactComponent as Support } from "./img/support.svg";
import { ReactComponent as UserIcon } from "./img/user-icon.svg";
import { ReactComponent as Out } from "./img/out.svg";

function Management() {
  return (
    <div className="management">
      <p className="management__head">
        <UserIcon className="management__icon management__icon--color--pink icon1" width="16" height="18"/>
        Управление</p>
      <ul className="management__list">
        <li className="management__item ">
          <Portfolio className="management__icon management__icon--stroke icon2" width="" height=""/>
          <a className="management__link" href="#">Портфолио</a>
        </li>
        <li className="management__item item2">
          <Awards className="management__icon management__icon--stroke icon3" width="" height=""/>
          <a className="management__link" href="#">Награды</a>
        </li>
        <li className="management__item item3">
          <Heart className="management__icon management__icon--stroke icon4" width="" height=""/>
          <a className="management__link" href="#">Избранное</a>
        </li>
        <li className="management__item item4">
          <Account className="management__icon management__icon--stroke icon5" width="" height=""/>
          <a className="management__link" href="#">Аккаунт</a>
        </li>
        <li className="management__item item5">
          <Level className="management__icon management__icon--fill icon6" width="" height=""/>
          <a className="management__link" href="#">Уровень</a>
        </li>
        <li className="management__item item6">
          <Premium className="management__icon management__icon--stroke icon7" width="" height=""/>
          <a className="management__link" href="#">Премиум</a>
        </li>
        <li className="management__item item7">
          <Support className="management__icon management__icon--fill icon8" width="" height=""/>
          <a className="management__link" href="#">Поддержка</a>
        </li>
      </ul>
      <p className="management__out ">
        <Out className="management__icon management__icon--fill icon9"/>
        Выйти</p>
    </div>
  );
}

export default Management;