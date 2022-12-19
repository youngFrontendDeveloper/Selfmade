import "./Respect.scss";
import React, { useContext } from "react";
import User from "../User/User";
import { UserContext } from "../../contexts/userContext";
import { SelfmadeRespectContext } from "../../contexts/selfmadeRespectContext";
import RespectResult from "../RespectResult/RespectResult";
import RespectDisk from "../RespectDisk/RespectDisk";
import { DiskFullnessContext } from "../../contexts/diskFullnessContext";

function Respect() {
  const { firstName, lastName, avatar, avatar2 } = useContext( UserContext );
  const { selfmadeRespect, } = useContext( SelfmadeRespectContext );
  const { freeDisk, totalDisk } = useContext( DiskFullnessContext );


  return (
    <section className="respect">
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
      <RespectResult selfmadeRespect={ selfmadeRespect }/>
      <RespectDisk freeDisk={ freeDisk } totalDisk={ totalDisk }/>

    </section>
  );
}

export default Respect;


