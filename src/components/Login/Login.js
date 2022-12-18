import "./Login.scss";
import React, { useContext, useState } from "react";
import { ReactComponent as Notifications } from "./img/notifications.svg";
import User from "../User/User";
import Management from "../Management/Management";

import { UserContext } from "../../contexts/userContext";


function Login() {
  const { firstName, lastName, avatar, avatar2 } = useContext( UserContext );

  const [ isNotification, setNotification ] = useState( true );


  return (
    <div className="login">

      <div className="notification">
        <Notifications className="notification__img"/>
        { isNotification && <div className="notification__point"/> }
      </div>
      <User
        firstName={ firstName }
        lastName={ lastName }
        avatar={ avatar }
        avatar2={ avatar2 }
      />
      <Management/>


    </div>
  );
}

export default Login;
