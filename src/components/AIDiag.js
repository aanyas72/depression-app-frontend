// import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";

const AIDiag = () => {
  // const [date, setDate] = useState();

  const location = useLocation();

  return (
    <>
      <Header />
      <h1>Diagnostic for {location.state.date}</h1>
    </>
  );
}

export default AIDiag;
