import "./Login.scss";
import React, { useState } from "react";
import { ReactComponent as Notifications } from "./img/notifications.svg";
import User from "../User/User";
import Management from "../Management/Management";
import { user } from "../../variables/user";

function Login() {
  const [ isLogin, setLogin ] = useState( true );
  const [ isNotification, setNotification ] = useState( true );
  const width = "46";
  const height = "46";
  const userClass = "user";
  const firstNameClass = "user__name user__firstName";
  const lastNameClass = "user__name user__lastName";

  const cropText = (text) => {
    return ( text.slice( 0, 1 ) + "." );
  };


  return (
    <div className="login">
      {/*{ isLogin ?*/}
      {/*  <>*/}
          <div className="notification">
            <Notifications className="notification__img"/>
            { isNotification && <div className="notification__point"/> }
          </div>
          <User
            width={ width }
            height={ height }
            firstNameClass={ firstNameClass }
            lastNameClass={ lastNameClass }
            userClass={ userClass }
            cropText={ cropText }
          />
          <Management/>

        {/*</>*/}
      {/* : <p className="login__text">*/}
      {/*  Войти*/}
      {/*</p> }*/}


    </div>
  );
}

export default Login;
