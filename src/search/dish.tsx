import React from "react";

import "./dish.scss";

const dish = ({ name, main, type, time, image }: any) => {
  return (
    <div className="dish">
      <img className="dish__image" src={image} alt={name} />
      <h4 className="dish__title">{name}</h4>
    </div>
  );
};

export default dish;
