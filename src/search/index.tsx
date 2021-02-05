import React, { useState } from "react";

import Dish from "../Dish";
import { types, mains } from "../assets/data";
import { useFormFields } from "../hooks/useFormFields";
import useDishes from "../hooks/useDishes";
import { DishObject } from "../types";
import "./Search.scss";

const Search = () => {
  const [filterOption, setFilterOption] = useState<string[]>([]);
  const [hideMains, setHideMains] = useState<boolean>(false);
  const [hideTypes, setHideTypes] = useState<boolean>(false);
  const [filteredDishes] = useDishes(filterOption);
  const [fields, , handleArrays] = useFormFields({
    main: [],
    type: [],
  });

  function handleFilterChecks(id: string, value: string) {
    handleArrays(id, value);
    let filter = [...fields.main, ...fields.type];
    setFilterOption(filter);
  }

  return (
    <div className="search">
      <section>
        <h3 onClick={() => setHideMains(!hideMains)} className="search__title">
          Main ingredient{" "}
          <span className="search__title--count">({fields.main.length})</span>
        </h3>
        {mains.map((main: string) => (
          <button
            key={main}
            id={main}
            hidden={hideMains}
            className={
              filterOption.includes(main)
                ? "search__filter"
                : "search__filter--selected"
            }
            onClick={() => handleFilterChecks("main", main)}
          >
            {main}
          </button>
        ))}
      </section>
      <section>
        <h3 onClick={() => setHideTypes(!hideTypes)} className="search__title">
          Type{" "}
          <span className="search__title--count">({fields.type.length})</span>
        </h3>
        {types.map((type: string) => (
          <button
            key={type}
            id={type}
            hidden={hideTypes}
            onClick={() => handleFilterChecks("type", type)}
            className={
              filterOption.includes(type)
                ? "search__filter"
                : "search__filter--selected"
            }
          >
            {type}
          </button>
        ))}
      </section>

      <section className="search__horizontal-slide">
        {filteredDishes.map((dish: DishObject) => (
          <Dish key={dish.name} name={dish.name} image={dish.image} />
        ))}
      </section>
      <p className="search__result-count">
        Displaying
        {filteredDishes.length === 1
          ? ` ${filteredDishes.length} result`
          : ` ${filteredDishes.length} results`}
      </p>
    </div>
  );
};

export default Search;
