import React, { useState } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dish from "../Dish";
import { dishes } from "../assets/data";
import "./Surprise.scss";

const Surprise = () => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * dishes.length)
  );

  const randomDish = () => {
    const i = Math.floor(Math.random() * dishes.length);
    setIndex(i);
  };

  return (
    <div className="surprise">
      <Dish name={dishes[index].name} image={dishes[index].image} />
      <button className="surprise__new-button" onClick={() => randomDish()}>
        <FontAwesomeIcon icon={faPaw} />
        <span className="surprise__new-button--text">
          Give me a different one
        </span>
      </button>
    </div>
  );
};

export default Surprise;
