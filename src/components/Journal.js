import Header from "./Header";
import MoodBox from "./MoodBox";
import "../styles/Journal.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import PhysBox from "./PhysBox";
import convertDate from "./convertDate";
import DeprScale from "./DeprScale";
import SuicScale from "./SuicScale";

const Journal = () => {
  const [deprLvl, setDeprLvl] = useState();
  const [isSuic, setIsSuic] = useState();
  const [mood, setMood] = useState();
  const [activity, setActivity] = useState();
  const [entry, setEntry] = useState();
  const [grat, setGrat] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/diagnosis", { state: { date: convertDate(new Date()) } });
  }

  return (
    <>
      <Header />
      <h1>Journal entry for {convertDate(new Date())}</h1>

      <h3 style={{ marginTop: "20px" }}>How depressed are you feeling today?</h3>
      <DeprScale deprLvl={deprLvl} setDeprLvl={setDeprLvl} />

      <h3 style={{ marginTop: "20px" }}>Are you feeling suicidal?</h3>
      {isSuic &&
        <p style={{ marginBottom: "20px" }}>If you are, please talk to someone.
          Call the suicide hotline at the number 988, or speak to your doctor immediately. </p>
      }
      <SuicScale isSuic={isSuic} setIsSuic={setIsSuic} />
      
      <h3 style={{ marginTop: "20px" }}>Log your mood for today:</h3>
      <MoodBox mood={mood} setMood={setMood} />

      <h3 style={{ marginTop: "20px" }}>Log any physical activity:</h3>
      <PhysBox activity={activity} setActivity={setActivity} />

      <h3 style={{ marginTop: "20px" }}>Write your gratitude journal:</h3>
      <p>
        Write about a few things that you are grateful for or that you are proud
        of!
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
          onChange={(event) => setGrat(event.target.value)}
        />
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
