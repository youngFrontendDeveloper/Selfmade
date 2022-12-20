import "./RespectDisk.scss";
import React from "react";

function RespectDisk({ freeDisk, totalDisk }) {
  return (
    <div className="respect__disk">
      <h3 className="respect__disk-title">Мой диск</h3>
      <div className="respect__disk-block">
        <p className="respect__disk-text">Осталось</p>
        <p className="respect__disk-meaning">{ freeDisk }/{ totalDisk } (mb)</p>
        <div className="respect__disk-indicator-wrap">
          <span className="respect__disk-indicator" style={ {
            width: `${ totalDisk - freeDisk }%`
          } }/>
          <a href="#" className="respect__disk-link">Добавить место</a>
        </div>
      </div>
    </div>
  );
}

export default RespectDisk;