const PrevJournal = () => {
  const [mood, setMood] = useState();
  const [activity, setActivity] = useState();
  const [entry, setEntry] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <>
      <Header />
      <h1>Journal entry for {convertDate(new Date())}</h1>
      <h3 style={{ marginTop: "20px" }}>Log your mood for today:</h3>

      <MoodBox mood={mood} setMood={setMood} />

      <h3 style={{ marginTop: "20px" }}>Log any physical activity:</h3>

      <PhysBox activity={activity} setActivity={setActivity} />

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

export default PrevJournal;
