import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";
import Dish from "../search/dish";
import { dishes } from "../data";
import "./surprise.scss";

const Surprise = ({ content, setContent }: any) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * dishes.length));

  const randomDish = () => {
    const i = Math.floor(Math.random() * dishes.length);
    setIndex(i);
  };

  return (
    <div className="surprise" hidden={content !== "surprise"}>
      <Dish
        name={dishes[index].name}
        main={dishes[index].main}
        type={dishes[index].type}
        time={dishes[index].time}
        image={dishes[index].image}
      />
      <button className="new-dish-button" onClick={() => randomDish()}>
        <FontAwesomeIcon icon={faPaw} />
        <span className="new-dish-button__text">Give me a different one</span>
      </button>
    </div>
  );
};

export default Surprise;
