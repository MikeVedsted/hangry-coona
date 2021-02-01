import React, { useState, useEffect } from "react";
import { dishes, types, mains } from "../data";
import { useFormFields } from "../hooks/useFormfields";
import useDishes from "../hooks/useDishes";
import Dish from "./dish";
import "./search.scss";

const Search = ({ content, setContent }: any) => {
  const [filterOption, setFilterOption] = useState<any[]>([]);

  const [, filteredHats] = useDishes(filterOption);

  const [fields, handleFields, handleArrays] = useFormFields({
    main: [],
    type: [],
  });

  function handleFilterChecks(id: string, value: string) {
    handleArrays(id, value);
    let filter = [...fields.main, ...fields.type];
    setFilterOption(filter);
  }

  return (
    <div className="search" hidden={content !== "search"}>
      <section>
        <h3 className="search__title">Main ingredient</h3>
        {mains.map((main) => (
          <button
            id={main}
            className={
              filterOption.includes(main)
                ? "search-filter"
                : "search-filter--selected"
            }
            onClick={() => handleFilterChecks("main", main)}
          >
            {main}
          </button>
        ))}
      </section>
      <section>
        <h3 className="search__title">Type</h3>
        {types.map((type) => (
          <button
            id={type}
            onClick={() => handleFilterChecks("type", type)}
            className={
              filterOption.includes(type)
                ? "search-filter"
                : "search-filter--selected"
            }
          >
            {type}
          </button>
        ))}
      </section>
      <section className="horizontal-slid">
        {filteredHats.map((dish: any) => (
          <Dish
            name={dish.name}
            main={dish.main}
            type={dish.type}
            time={dish.time}
            image={dish.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Search;
