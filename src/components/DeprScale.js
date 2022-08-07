const DeprScale = ({ deprLvl, setDeprLvl }) => {
  return (
    <div className="box-container">
      <div className="one-box">
        <p className="depr-label">1 - I feel pretty much fine</p>
        <input
          type="radio"
          value="1"
          className="radio-button"
          checked={deprLvl === "1"}
          onChange={() => setDeprLvl("1")}
        ></input>
      </div>
      <div className="one-box">
        <p className="depr-label">2 - I feel moderately depressed</p>
        <input
          type="radio"
          value="1"
          className="radio-button"
          checked={deprLvl === "2"}
          onChange={() => setDeprLvl("2")}
        ></input>
      </div>
      <div className="one-box">
        <p className="depr-label">3 - I can barely get out of bed</p>
        <input
          type="radio"
          value="1"
          className="radio-button"
          checked={deprLvl === "3"}
          onChange={() => setDeprLvl("3")}
        ></input>
      </div>
    </div>
  );
};

export default DeprScale;
