import { FaTimes, FaRunning, FaBiking, FaWalking } from "react-icons/fa";
import { TbSwimming, TbYoga } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsKabaddi } from "react-icons/md";

const PhysBox = ({ activity, setActivity}) => {
    return (
      <div className="box-container">
        <div className="one-box">
          <FaTimes
            size={30}
            color={activity === "none" ? "lightGreen" : "white"}
            onClick={() => setActivity("none")}
          />
          <p style={{ color: activity === "none" ? "lightGreen" : "white" }}>
            none
          </p>
        </div>

        <div className="one-box">
          <FaWalking
            size={30}
            color={activity === "walking" ? "lightGreen" : "white"}
            onClick={() => setActivity("walking")}
          />
          <p style={{ color: activity === "walking" ? "lightGreen" : "white" }}>
            walking
          </p>
        </div>

        <div className="one-box">
          <FaRunning
            size={30}
            color={activity === "running" ? "lightGreen" : "white"}
            onClick={() => setActivity("running")}
          />
          <p style={{ color: activity === "running" ? "lightGreen" : "white" }}>
            running
          </p>
        </div>

        <div className="one-box">
          <FaBiking
            size={30}
            color={activity === "biking" ? "lightGreen" : "white"}
            onClick={() => setActivity("biking")}
          />
          <p style={{ color: activity === "biking" ? "lightGreen" : "white" }}>
            biking
          </p>
        </div>

        <div className="one-box">
          <CgGym
            size={30}
            color={activity === "gym" ? "lightGreen" : "white"}
            onClick={() => setActivity("gym")}
          />
          <p style={{ color: activity === "gym" ? "lightGreen" : "white" }}>
            gym
          </p>
        </div>

        <div className="one-box">
          <TbSwimming
            size={30}
            color={activity === "swimming" ? "lightGreen" : "white"}
            onClick={() => setActivity("swimming")}
          />
          <p
            style={{ color: activity === "swimming" ? "lightGreen" : "white" }}
          >
            swimming
          </p>
        </div>

        <div className="one-box">
          <TbYoga
            size={30}
            color={activity === "yoga" ? "lightGreen" : "white"}
            onClick={() => setActivity("yoga")}
          />
          <p style={{ color: activity === "yoga" ? "lightGreen" : "white" }}>
            yoga
          </p>
        </div>

        <div className="one-box">
          <MdOutlineSportsKabaddi
            size={30}
            color={activity === "teamSports" ? "lightGreen" : "white"}
            onClick={() => setActivity("teamSports")}
          />
          <p
            style={{
              color: activity === "teamSports" ? "lightGreen" : "white",
            }}
          >
            team sports
          </p>
        </div>
      </div>
    );
};

export default PhysBox;
