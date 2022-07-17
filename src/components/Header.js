import { FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";

import "../styles/Header.css";
// import AuthenticationService from "../services/AuthenticationService";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();
    
    return (
      <div className="header">
        <VscHome
          onClick={() => navigate("/")}
          style={{ backgroundColor: "transparent", color: "white", "cursor": "pointer" }}
          size="30px"
        />
        <div className="dropdown" onClick={() => setShowMenu(!showMenu)}>
          <FaRegUserCircle className="user-logo" size={28} />
          <FaAngleDown className="down-arrow" />
          {showMenu && (
            <div className="dropdown-menu">
              <div>
                Signed in as
                {/* <b>{AuthenticationService.getLoggedInUserName()}</b> */}
              </div>
              <div className="divider"></div>
              {/* <Link
              to="/logout"
              style={{ backgroundColor: "transparent", fontWeight: "bold" }}
            > */}
              Logout
              {/* </Link>  */}
            </div>
          )}
        </div>
      </div>
    );
}

export default Header;