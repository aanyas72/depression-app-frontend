import Header from "./Header";
import "../styles/Calendar.css";

import { Calendar } from "react-calendar";

const MonthlyCalendar = ({ setDay }) => {
  const onChange = () => {
    console.log("day clicked");
  }

  const changeDay = (newDay) => setDay(newDay)

  return (
    <>
       <Header />
      <h1>Click on a day to see the journal entry for it!</h1>
      <Calendar onChange={(value) => {
        changeDay(value)
      }} />
    </>
  );
}

export default MonthlyCalendar;
