import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import '../styles/App.css';
import AIDiag from "./AIDiag";
import MonthlyCalendar from "./MonthlyCalendar";
import Dashboard from './Dashboard.js'
import Journal from "./Journal";

const App = () => {
  const [day, setDay] = useState();
  
  var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/calendar" element={<MonthlyCalendar />} />
      <Route path="/diagnosis" element={<AIDiag />} />
        {/* <Route
          exact
          path="/"
          element={<Journal day={today} />}
        /> */}
      </Routes>
    </Router>
  );
  };

export default App;
