import React, { useState } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Dish from "../dish";
import { dishes } from "../assets/data";
import "./surprise.scss";

const Surprise = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * dishes.length));

  const randomDish = () => {
    const i = Math.floor(Math.random() * dishes.length);
    setIndex(i);
  };

  return (
    <div className='surprise'>
      <Dish
        name={dishes[index].name}
        main={dishes[index].main}
        type={dishes[index].type}
        time={dishes[index].time}
        image={dishes[index].image}
      />
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
