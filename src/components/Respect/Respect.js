import "./Respect.scss";
import React, { useState, useContext } from "react";
import User from "../User/User";
import { UserContext } from "../../contexts/userContext";

function Respect() {
  const { firstName, lastName, avatar, avatar2 } = useContext( UserContext );
  const [ free, setFree ] = useState( 40 );


  return (
    <div className="respect">
      <div className="respect__user-block">
        <User
          isBig
          firstName={ firstName }
          lastName={ lastName }
          avatar={ avatar }
          avatar2={ avatar2 }
        />
        <p className="respect__top">топ</p>
      </div>
      <div className="respect__result">
        <h2 className="respect__result-title">SELFMADE RESPECT (SR)
          <a href="#" className="respect__result-link">(Что
            это?)</a>
        </h2>
        <ul className="respect__list">
          {/*{ respect.map( item =>*/ }
          {/*  <li className="respect__item" style={ style } bgColor={ item.color }>{ item.title }</li>*/ }
          {/*) }*/ }
          <li className="respect__item item1">Профиль</li>
          <li className="respect__item item2">Портфолио</li>
          <li className="respect__item item3">SR ФРЕШ</li>
          <li className="respect__item item4">SR ПРО</li>
          <li className="respect__item item5">SR ТОП</li>
        </ul>
      </div>
      <div className="respect__disk">
        <h3 className="respect__disk-title">Мой диск</h3>
        <div className="respect__disk-block">
          <p className="respect__disk-text">Осталось</p>
          <p className="respect__disk-meaning">{ free }/100 (mb)</p>
          <p className="respect__disk-input-wrap">

            <input className="respect__disk-input" type="range" min="0" max="100" step="1"
                   value={ 100 - free }
            />
            <a href="#" className="respect__disk-link">Добавить место</a>


          </p>

        </div>
      </div>
    </div>
  );
}

export default Respect;


