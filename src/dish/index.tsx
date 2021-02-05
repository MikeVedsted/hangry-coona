import React from "react";

import { DishProps } from "../types";
import "./Dish.scss";

const dish = ({ name, image }: DishProps) => {
  return (
    <div className="dish">
      <img className="dish__image" src={image} alt={name} />
      <h4 className="dish__title">{name}</h4>
    </div>
  );
};

export default dish;
