import "./User.scss";
import React, { useEffect } from "react";
import { user } from "../../variables/user";
import avatar from "./img/avatar.jpg";
import avatar2 from "./img/avatar@2x.jpg";

function User({ userClass, firstNameClass, lastNameClass, imgClass, width, height, cropText}) {

  return (
    <div className={ userClass }>
      <span
        className={ firstNameClass }>{ userClass.includes( "user--reverse" ) ? user.firstName : cropText( user.firstName ) }</span>
      <span className={ lastNameClass }>{ user.lastName }</span>
      <img src={ avatar } srcSet={ `${ avatar2 } 2x` }
           alt="Аватар пользователя"
           className={ imgClass } width={ width } height={ height }/>
    </div>
  );
}

export default User;
