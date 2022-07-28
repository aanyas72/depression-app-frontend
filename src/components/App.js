import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import '../styles/App.css';
import AIDiag from "./AIDiag";
import MonthlyCalendar from "./MonthlyCalendar";
import Dashboard from './Dashboard.js'
import Journal from "./Journal";
import Login from "./Login";
import SignUp from "./SignUp";
import Logout from "./Logout";

const App = () => {
  const [day, setDay] = useState();

  const convertDate = (day) => {
    var dd = String(day.getDate()).padStart(2, "0");
    var mm = String(day.getMonth() + 1).padStart(2, "0");
    var yyyy = day.getFullYear();

    return mm + "/" + dd + "/" + yyyy;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/journal" element={<Journal day={day} />} />
        <Route path="/calendar" element={<MonthlyCalendar setDay={setDay} />} />
        <Route path="/diagnosis" element={<AIDiag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
  };

export default App;
