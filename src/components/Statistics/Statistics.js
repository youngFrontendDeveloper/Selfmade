import "./Statistics.scss";
import React, { useState } from "react";
import { statistics } from "../../variables/statictics";
// import Date from "../Date/Date";
import DatePicker from "react-datepicker";


function Statistics() {
  const [startDate, setStartDate] = useState(new Date());

  return (

    <table className="statistics">
      <thead>
      <tr className="statistics__head">
        <td className="statistics__cell statistics__cell--title">Статистика с &nbsp;
          {/*<Date/>*/}
          <DatePicker className="statistics__date"
                      dateFormat="dd.MM.yy"
                      selected={ startDate }
                      onChange={ (date) => setStartDate( date ) }
          />
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
            <td className="statistics__cell">{ item.user }</td>
            <td className="statistics__cell">{ item.anonymous }</td>
            <td className="statistics__cell">{ item.all }</td>
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