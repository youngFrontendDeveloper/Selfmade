import "./RespectDisk.scss";
import React from "react";

function RespectDisk({freeDisk, totalDisk}) {
  return(
    <div className="respect__disk">
      <h3 className="respect__disk-title">Мой диск</h3>
      <div className="respect__disk-block">
        <p className="respect__disk-text">Осталось</p>
        <p className="respect__disk-meaning">{ freeDisk }/{totalDisk} (mb)</p>
        <p className="respect__disk-input-wrap">

          <input className="respect__disk-input" type="range" min="0" max="100" step="1"
                 value={ totalDisk - freeDisk }
          />
          <a href="#" className="respect__disk-link">Добавить место</a>


        </p>

      </div>
    </div>
  )
}

export default RespectDisk