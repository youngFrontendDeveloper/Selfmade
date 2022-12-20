import "./Statistics.scss";
import React, { useState, useContext } from "react";
import SelectDate from "../Date/Date";
import { StatisticsContext } from "../../contexts/statisticsContext";

function Statistics() {
  const { statistics } = useContext( StatisticsContext );
  const [ startDate, setStartDate ] = useState( null );
  const [ endDate, setEndDate ] = useState( null );
  const placeholderFrom = "01.12.22";
  const placeholderTo = "08.12.22";


  return (

    <table className="statistics">
      <thead>
      <tr className="statistics__head">
        <td className="statistics__cell statistics__cell--title">Статистика с &nbsp;

          <SelectDate selected={ startDate } setStartDate={ setStartDate }
                      placeholderText={ placeholderFrom }
          />

          &nbsp; по &nbsp;

          <SelectDate selected={ endDate } setStartDate={ setEndDate }
                      placeholderText={ placeholderTo }/>


        </td>
        <td className="statistics__cell statistics__cell--title">Пользователи</td>
        <td className="statistics__cell statistics__cell--title">Анонимы</td>
        <td className="statistics__cell statistics__cell--title">Всего</td>
      </tr>
      </thead>
      <tbody>
      {
        statistics.map( item =>
          <tr className="statistics__row">
           <td className="statistics__cell">{ item.title }</td>
            { item.user !== 0 ? <td className="statistics__cell">{ item.user } </td> :
              <td className="statistics__cell"><span className="statistics__cell-null">x</span></td> }
            { item.anonymous !== 0 ? <td className="statistics__cell">{ item.anonymous } </td> :
              <td className="statistics__cell"><span className="statistics__cell-null">x</span></td> }
            { item.all !== 0 ? <td className="statistics__cell">{ item.all } </td> :
              <td className="statistics__cell"><span className="statistics__cell-null">x</span></td> }
          </tr>
        )
      }
      </tbody>
    </table>

  );
}

export default Statistics;

// <input
// onClick={ (e) => setInputTypeFirst( "date" ) }
// onBlur={ (e) => setInputTypeFirst( "text" ) }
// className="statistics__date"
// type="date"
// value="2022-12-01"
// type={ inputTypeFirst }
// />
// по &nbsp;
/*<label> 08.12.22*/
// <input
// onClick={ (e) => setInputTypeSecond( "date" ) }
// onBlur={ (e) => setInputTypeSecond( "text" ) }
// className="statistics__date"
// type="date"
// value="2022-12-08"
// type={ inputTypeSecond }
// />
/*</label>*/