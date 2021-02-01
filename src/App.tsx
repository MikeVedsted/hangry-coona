import { useState, useEffect } from "react";
import Home from "./home";
import Search from "./search";
import Surprise from "./surprise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./hangry.scss";

function App() {
  const [content, setContent] = useState("start");

  return (
    <div className="App">
      <div className="banner" hidden={content === "start"}>
        <button className="home-button" onClick={() => setContent("start")}>
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>
      <Home content={content} setContent={setContent} />
      <Search content={content} setContent={setContent} />
      <Surprise content={content} setContent={setContent} />
    </div>
  );
}

export default App;
