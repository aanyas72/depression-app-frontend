import Header from "./Header";
import "../styles/Calendar.css";

import { Calendar } from "react-calendar";

const MonthlyCalendar = () => {
    return (
      <>
        <Header />
        <h1>Click on a day to see the journal entry for it!</h1>
        <Calendar /> 
      </>
    );
}

export default MonthlyCalendar;


