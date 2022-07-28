import Header from "./Header";
import "../styles/Journal.css";

import { useState } from "react";
import { TbSwimming, TbYoga } from "react-icons/tb";
import {
  FaRegSmile,
  FaRegSadTear,
  FaRegTired,
  FaRegLaughSquint,
  FaRegAngry,
  FaRegMeh,
  FaTimes,
  FaRunning,
  FaBiking,
  FaWalking,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";

const Journal = ({ day }) => {
  const [mood, setMood] = useState();
  const [activity, setActivity] = useState();
  const [entry, setEntry] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <>
      <Header />
      <h1>Journal entry for {day}</h1>
      <h3 style={{ marginTop: "20px" }}>Log your mood for today:</h3>

      <div className="box-container">
        <div className="one-box" onClick={() => setMood("happy")}>
          <FaRegSmile
            size={27}
            color={mood === "happy" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "happy" ? "lightGreen" : "white" }}>
            happy
          </p>
        </div>

        <div className="one-box" id="sad" onClick={() => setMood("sad")}>
          <FaRegSadTear
            size={27}
            color={mood === "sad" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "sad" ? "lightGreen" : "white" }}>sad</p>
        </div>

        <div className="one-box" id="angry" onClick={() => setMood("angry")}>
          <FaRegAngry
            size={27}
            color={mood === "angry" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "angry" ? "lightGreen" : "white" }}>
            angry
          </p>
        </div>

        <div className="one-box" onClick={() => setMood("energetic")}>
          <FaRegLaughSquint
            size={27}
            color={mood === "energetic" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "energetic" ? "lightGreen" : "white" }}>
            energetic
          </p>
        </div>

        <div className="one-box" onClick={() => setMood("calm")}>
          <FaRegMeh
            size={27}
            color={mood === "calm" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "calm" ? "lightGreen" : "white" }}>
            calm
          </p>
        </div>

        <div className="one-box" onClick={() => setMood("stressed")}>
          <FaRegTired
            size={27}
            color={mood === "stressed" ? "lightGreen" : "white"}
          />
          <p style={{ color: mood === "stressed" ? "lightGreen" : "white" }}>
            stressed
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: "20px" }}>Log any physical activity:</h3>

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

      <h3 style={{ marginTop: "20px" }}>Log your journal entry:</h3>
      <p>
        Feel free to write about anything! You can include your thoughts,
        feelings, and activites, for example.
      </p>

      <div className="journal-entry">
        <TextareaAutosize
          style={{
            padding: "15px",
            marginTop: "20px",
            minWidth: "80%",
            fontSize: "20px",
          }}
          minRows="10"
          onChange={(event) => setEntry(event.target.value)}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <button
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "20px" }}
        >
          save
        </button>
      </form>
    </>
  );
};

export default Journal;
