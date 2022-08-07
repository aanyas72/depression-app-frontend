import Header from "./Header";
import "../styles/Calendar.css";

import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import convertDate from "./convertDate";

const MonthlyCalendar = () => {
  
  const navigate = useNavigate();
  
  const onChange = (value) => {
    navigate("/diagnosis", { state: { date: convertDate(value) } });
  }

  return (
    <>
       <Header />
      <h1>Click on a day to see the journal entry for it!</h1>
      <Calendar onChange={(value) => onChange(value)} />
    </>
  );
}

export default MonthlyCalendar;
