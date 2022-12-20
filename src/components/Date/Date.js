import "./Date.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function SelectDate({ selected, setStartDate, placeholderText,  }) {

  return (
    <DatePicker className="statistics__date"
                dateFormat="dd.MM.yy"
                selected={ selected }
                onChange={ (date) => setStartDate( date ) }
                placeholderText={ placeholderText }
                calendarStartDay={ 1 }
    />
  );
}

export default SelectDate;