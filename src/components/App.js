import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../styles/App.css';
import AIDiag from "./AIDiag";
import MonthlyCalendar from "./MonthlyCalendar";
import Dashboard from './Dashboard.js'
import Journal from "./Journal";
import Login from "./Login";
import SignUp from "./SignUp";
import Logout from "./Logout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/calendar" element={<MonthlyCalendar />} />
        <Route path="/diagnosis" element={<AIDiag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
  };

export default App;
