import Header from "./Header";
import "../styles/Dashboard.css";

import { useNavigate } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

const Dashboard = () => {
  const navigate = useNavigate();
    // if user is logged in return dashboard
    return (
      <>
        <Header />
        <div className="dashboard">
          <h1 className="dashboard-name">Welcome!</h1>
          <div className="boxes">
            <div className="box">
              <h3 className="box-title">See your AI diagnosis</h3>
              <button className="add-new" onClick={() => navigate("/diagnosis")}>
                <HiOutlineClipboardList className="icon" size="30px" />
              </button>
            </div>

            <div className="box">
              <h3 className="box-title">
                Add a journal entry for today
              </h3>
              <button className="add-new" onClick={() => navigate("/journal")}>
                <BsPlusLg className="icon" size="30px" />
              </button>
            </div>

            <div className="box">
              <h3 className="box-title">See your previous entries</h3>
              <button className="add-new" onClick={() => navigate("/calendar")}>
                <IoCalendarOutline className="icon" size="30px" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dashboard;