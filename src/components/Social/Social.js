import "./Social.scss";
import React from "react";
import { ReactComponent as Telegram } from "./img/telegram.svg";
import { ReactComponent as Vk } from "./img/vk.svg";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Instagram } from "./img/instagram.svg";

function Social() {
  return (
    <div className="social">
      <a href="#" className="social__icon">
        <Telegram className="telegram"/>
      </a>
      <a href="#">
        <Instagram className="instagram"/>
      </a>
      <a href="#">
        <Vk className="vk"/>
      </a>
      <a href="#">
        <Facebook className="facebook"/>
      </a>

    </div>
  );
}

export default Social;
