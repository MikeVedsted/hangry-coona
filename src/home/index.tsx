import React from "react";
import Gif from "../assets/AF002142_01.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./home.scss";

const Home = ({ content, setContent }: any) => {
  return (
    <div className="home" hidden={content !== "start"}>
      <div className="logo">
        <h2>HANGRY</h2>
        <h2 className="coona">Coona</h2>
      </div>
      <img className="frontpage-gif" src={Gif} alt="gif of a coona" />
      <div className="buttons">
        <button
          className="buttons__surprise"
          onClick={() => setContent("surprise")}
        >
          <FontAwesomeIcon icon={faPaw} />
          <span className="button-text">Surprise me</span>
        </button>
        <button
          className="buttons__search"
          onClick={() => setContent("search")}
        >
          <FontAwesomeIcon icon={faSearch} />
          <span className="button-text">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
