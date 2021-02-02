import { useState, useEffect } from "react";
import { dishes } from "../assets/data";

function useDishes(filterOption: string[]) {
  const [filteredDishes, setFilteredDishes] = useState<any[]>([]);

  useEffect(() => {
    let filtered = [...dishes];
    if (filterOption.length > 0) {
      filtered = dishes.filter(
        (dish) =>
          filterOption.some((filter) => filter === dish.main) ||
          filterOption.some((filter) => filter === dish.type)
      );
    }
    setFilteredDishes(filtered);
  }, [filterOption]);

  return [filteredDishes];
}

export default useDishes;
