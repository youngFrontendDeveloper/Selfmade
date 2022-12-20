import "./Date.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function SelectDate({ selected, minDate, maxDate, setStartDate, }) {

  return (
    <DatePicker className="statistics__date"
                dateFormat="dd.MM.yy"
                selected={ selected }
                onChange={ (date) => setStartDate( date ) }
                minDate={ minDate }
                maxDate={ maxDate }
                calendarStartDay={ 1 }
    />
  );
}

export default SelectDate;