import Header from "./Header";
import "../styles/Journal.css";

import { useState } from "react";
import { TbMoodSmile, TbMoodSad, TbTornado } from "react-icons/tb";
import { ImAngry } from "react-icons/im";
import { MdOutlineSentimentNeutral } from "react-icons/md"
import { BsSun } from "react-icons/bs"

const Journal = ({ day }) => {
  const [mood, setMood] = useState();

  const changeMood = (moodName) => setMood(moodName)

    return (
      <>
        <Header />
        <h1 style={{ marginBottom: "20px" }}>Journal entry for {day}</h1>
        <h3 style={{ marginBottom: "20px" }}>Enter your mood for today:</h3>
        <div className="mood-container">
          <div className="mood-box" onClick={() => changeMood("happy")}>
            <TbMoodSmile
              size={30}
              color={mood === "happy" ? "green" : "white"}
            />
            <p style={{ color: mood === "happy" ? "green" : "white" }}>happy</p>
          </div>

          <div className="mood-box" id="sad" onClick={() => changeMood("sad")}>
            <TbMoodSad size={30} color={mood === "sad" ? "green" : "white"} />
            <p style={{ color: mood === "sad" ? "green" : "white" }}>sad</p>
          </div>

          <div
            className="mood-box"
            id="angry"
            onClick={() => changeMood("angry")}
          >
            <ImAngry size={27} color={mood === "angry" ? "green" : "white"} />
            <p style={{ color: mood === "angry" ? "green" : "white" }}>angry</p>
          </div>

          <div className="mood-box" onClick={() => changeMood("energetic")}>
            <BsSun size={30} color={mood === "energetic" ? "green" : "white"} />
            <p style={{ color: mood === "energetic" ? "green" : "white" }}>
              energetic
            </p>
          </div>

          <div className="mood-box" onClick={() => changeMood("calm")}>
            <MdOutlineSentimentNeutral
              size={30}
              color={mood === "calm" ? "green" : "white"}
            />
            <p style={{ color: mood === "calm" ? "green" : "white" }}>calm</p>
          </div>

          <div className="mood-box" onClick={() => changeMood("stressed")}>
            <TbTornado
              size={30}
              color={mood === "stressed" ? "green" : "white"}
            />
            <p style={{ color: mood === "stressed" ? "green" : "white" }}>
              stressed
            </p>
          </div>
        </div>
      </>
    );
}

export default Journal;