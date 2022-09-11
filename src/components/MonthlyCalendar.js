import Header from "./Header";
import AuthenticationService from "../services/AuthenticationService";
import "../styles/Calendar.css";

import { useEffect } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import convertDate from "./convertDate";

const MonthlyCalendar = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthenticationService.isUserLoggedIn()) {
      navigate("/login");
    }
  });
  
  const onChange = (value) => {
    navigate("/diagnosis", { state: { date: convertDate(value) } });
  }

  return (
    <>
      {AuthenticationService.isUserLoggedIn() ? (
        <>
          <Header />
          <h1>Click on a day to see the journal entry for it!</h1>
          <Calendar onChange={(value) => onChange(value)} />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MonthlyCalendar;
