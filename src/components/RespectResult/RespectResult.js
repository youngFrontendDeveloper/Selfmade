import "./RespectResult.scss";
import React from "react";

function RespectResult({selfmadeRespect}) {
  return (
    <div className="respect__result">
      <h2 className="respect__result-title">SELFMADE RESPECT (SR)
        <a href="#" className="respect__result-link">(Что
          это?)</a>
      </h2>
      <div className="respect__list">
        { selfmadeRespect.map( (item, index) =>
          <div className="respect__item" key={ `r-${ index }` }>
            <div className="respect__icon" style={ {
              backgroundColor: item.color,
            } }/>
            <div className="respect__title">{ item.title }</div>
          </div>
        ) }

      </div>
    </div>
  );
}

export default RespectResult;