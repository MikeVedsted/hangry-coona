import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";

import { HomeProps } from "../types";
import Logo from "../logo";
import "./Home.scss";

const Home = ({ setContent }: HomeProps) => {
  return (
    <div className="home">
      <Logo />
      <div className="home__buttons">
        <button
          className="home__buttons--surprise"
          onClick={() => setContent("surprise")}
        >
          <FontAwesomeIcon icon={faPaw} />
          <span className="home__buttons--surprise--text">Surprise me</span>
        </button>
        <button
          className="home__buttons--search"
          onClick={() => setContent("search")}
        >
          <FontAwesomeIcon icon={faSearch} />
          <span className="home__buttons--search--text">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
