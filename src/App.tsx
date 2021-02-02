import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Home from "./home";
import Search from "./search";
import Surprise from "./surprise";
import "./App.scss";

function App() {
  const [content, setContent] = useState("start");

  const populate = () => {
    if (content === "start") {
      return <Home setContent={setContent} />;
    } else if (content === "surprise") {
      return <Surprise />;
    } else if (content === "search") {
      return <Search />;
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <nav className="nav">
        <button
          hidden={content === "start"}
          className="nav__button"
          onClick={() => setContent("start")}
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
      </nav>
      {populate()}
    </div>
  );
}

export default App;
