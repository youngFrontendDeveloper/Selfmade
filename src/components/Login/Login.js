import "./Login.scss";
import React, { useContext, useState } from "react";
import User from "../User/User";
import Management from "../Management/Management";
import { UserContext } from "../../contexts/userContext";
import Notifications from "../Notifications/Notifications";


function Login() {
  const { firstName, lastName, avatar, avatar2 } = useContext( UserContext );

  return (
    <div className="login">
      <Notifications />

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
