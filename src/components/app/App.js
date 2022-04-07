import React, { useState } from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  
  /* Main app state */
  const [activeAmount, setActiveAmount] = useState(0); 
  const [finishedAmount, setFinishedAmount] = useState(0);

  return (
    <Router>
      <Header />
      <Main
        setActiveAmount={setActiveAmount}
        setFinishedAmount={setFinishedAmount}
      />
      <Footer activeAmount={activeAmount} finishedAmount={finishedAmount} />
    </Router>
  );
};

export default App;
