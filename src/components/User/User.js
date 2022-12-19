import "./User.scss";
import React, { useEffect } from "react";


function User({ isBig,  firstName, lastName, avatar, avatar2}) {

  return (

    isBig ?
      <div className="user user--reverse respect__user">

        <span
          className="user__name user__firstName user__firstName--big">{  firstName  }</span>
        <span className="user__name user__lastName user__lastName--big">{ lastName }</span>
        <img src={ avatar } srcSet={ `${ avatar2 } 2x` }
             alt="Аватар пользователя"
             className="user__img user__img--big" width="71" height="71"/>
      </div> :
      <div className="user">
        <span className="user__name user__firstName">{ firstName[0] + "." } </span>
        <span className="user__name user__lastName">{ lastName }</span>
        <img src={ avatar } srcSet={ `${ avatar2 } 2x` }
             alt="Аватар пользователя"
             className="user__img" width="46" height="46"/>

      </div>
  )
    ;
}

export default User;
