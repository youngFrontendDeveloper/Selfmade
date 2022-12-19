import "./Chart.scss";
import React, { useState, useEffect, useContext } from "react";
import { SelfmadeRespectContext } from "../../contexts/selfmadeRespectContext";
import { SRDataContext } from "../../contexts/SRData";

function Chart() {
  const [ isMounted, setMounted ] = useState( false );
  const { selfmadeRespect: respect, setSelfmadeRespect: setRespect } = useContext(SelfmadeRespectContext);
  const {total, filled, forDay, forMonth, forYear,} = useContext(SRDataContext);

  const calculateLengthOfCircle = (radius) => {
    return radius * 2 * Math.PI;
  };

  const calculateProgress = (meaning, radius, circumference) => {
    return ( circumference - meaning / 100 * circumference );
  };

  const handleMouseOver = (i) => () => {
    const newRespect = [
      ...respect.slice( 0, i ),
      ...respect.slice( i + 1 ),
      respect[ i ]
    ];
    setRespect( newRespect );
  };

  useEffect( () => {
    setMounted( true );
  }, [] );

  return (
    <section className="chart">
      <h3 className="chart__title">Ваш SR</h3>
      <div className="chart__img-wrap">
        <svg className="chart-img" width="230" height="230" viewBox="0 0 240 240">
          { respect.map( (item, i) => {
            let radius = 50.5 + item.index * 16;
            const lengthOfCircle = calculateLengthOfCircle( radius )
            const progressOffset = calculateProgress( item.meaning, radius, lengthOfCircle )
            return (
              <g key={ `bg-${ item.title }` } onMouseOver={ handleMouseOver( i ) }>
                <circle className="unit--bg"
                        style={ {
                          stroke: "#DDDDDD",
                          strokeDasharray: lengthOfCircle,
                          strokeDashoffset: 0,
                        } }
                        r={ radius } cx="50%" cy="50%"/>
                <circle className="unit" key={ item.title }
                        style={ {
                          stroke: item.color,
                          strokeDasharray: lengthOfCircle,
                          strokeDashoffset: isMounted
                            ? progressOffset
                            : lengthOfCircle,
                        } }
                        r={ radius } cx="50%" cy="50%" strokeLinecap="round"/>

                <path className="unit__title-bg"
                      style={ {
                        transform: `translate(77px,  ${ 88 + radius }px)`,
                      } }
                      d="M90 24.7736C90 26.4304 88.6569 27.7736 87 27.7736L48.8571 27.7736L45.7386 31.1906C45.3421 31.6252 44.6579 31.6252 44.2614 31.1906L41.1429 27.7736L2.99999 27.7736C1.34314 27.7736 -7.14249e-06 26.4304 -6.99764e-06 24.7736L-5.09413e-06 3C-4.94929e-06 1.34315 1.34313 -2.02858e-06 3 -1.88374e-06L87 5.45978e-06C88.6569 5.60462e-06 90 1.34315 90 3.00001L90 24.7736Z"
                      fill="#383838"/>
                <text className="unit__title"
                      style={ {
                        transform: `translate(43%, ${ 105 + radius }px)`
                      } }
                >{ item.title }</text>
              </g> );
          } )

          }
        </svg>
        <p className="chart__result">
          <span className="chart__result-day">+ { forDay }</span>
          <span className="chart__result-month">{ forMonth }</span>
          <span className="chart__result-year">{ forYear }</span>
        </p>
      </div>
      <p><span className="chart__filled">{ filled }</span>/<span className="chart__total">{ total }</span></p>
    </section>
  );
}

export default Chart;