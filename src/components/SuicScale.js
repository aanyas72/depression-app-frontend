const SuicScale = ({ isSuic, setIsSuic }) => {
  return (
    <div className="box-container">
      <div className="one-box">
        <p>yes</p>
        <input
          type="radio"
          value="1"
          className="radio-button"
          checked={isSuic ===  true}
          onChange={() => setIsSuic(true)}
        ></input>
      </div>
      <div className="one-box">
        <p>no</p>
        <input
          type="radio"
          value="1"
          className="radio-button"
          checked={isSuic === false}
          onChange={() => setIsSuic(false)}
        ></input>
      </div>
    </div>
  );
};

export default SuicScale;
