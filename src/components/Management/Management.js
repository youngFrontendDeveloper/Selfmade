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
    <section className="management">
      <ul className="management__list ">
        <li className="management__item management__item-active">
          <UserIcon className="management__icon management__icon--fill  icon1" width="16"
                    height="18"/>
          <a className="management__link" href="#">Управление</a>
        </li>
        <li className="management__item ">
          <Portfolio className="management__icon management__icon--stroke icon2" width="21" height="21"/>
          <a className="management__link" href="#">Портфолио</a>
        </li>
        <li className="management__item ">
          <Awards className="management__icon management__icon--stroke icon3" width="22" height="21"/>
          <a className="management__link" href="#">Награды</a>
        </li>
        <li className="management__item ">
          <Heart className="management__icon management__icon--stroke icon4" width="20" height="17"/>
          <a className="management__link" href="#">Избранное</a>
        </li>
        <li className="management__item ">
          <Account className="management__icon management__icon--stroke icon5" width="20" height="20"/>
          <a className="management__link" href="#">Аккаунт</a>
        </li>
        <li className="management__item item5">
          <Level className="management__icon management__icon--fill icon6" width="18" height="20"/>
          <a className="management__link" href="#">Уровень</a>
        </li>
        <li className="management__item item6">
          <Premium className="management__icon management__icon--stroke icon7" width="20" height="16"/>
          <a className="management__link" href="#">Премиум</a>
        </li>
        <li className="management__item item7">
          <Support className="management__icon management__icon--fill icon8" width="20" height="19"/>
          <a className="management__link" href="#">Поддержка</a>
        </li>
      </ul>
      <p className="management__out ">
        <Out className="management__icon management__icon--fill icon9" width="19" height="20"/>
        Выйти</p>
    </section>
  );
}

export default Management;