import {
    FaRegSmile,
    FaRegSadTear,
    FaRegTired,
    FaRegLaughSquint,
    FaRegAngry,
    FaRegMeh
} from "react-icons/fa";

const MoodBox = ({ mood, setMood }) => {
    return (
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
    );
}

export default MoodBox;