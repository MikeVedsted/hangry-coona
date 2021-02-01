import { useState, useEffect, useMemo } from "react";
import { dishes } from "../data";

function useHats(filterOption: string[]) {
  const [hats, setHats] = useState<any[]>([]);
  const [searchedHats, setSearchedHats] = useState<any[]>([]);
  const [filteredHats, setFilteredHats] = useState<any[]>([]);

  useMemo(() => {
    let filteredHats = [...dishes];
    if (filterOption.length > 0) {
      for (let i = 0; i < filterOption.length; i++) {
        filteredHats = dishes.filter(
          (hat) =>
            hat.type.includes(filterOption[i]) ||
            hat.main.includes(filterOption[i])
        );
      }
    }

    setFilteredHats(filteredHats);
  }, [searchedHats, filterOption]);

  return [hats, filteredHats];
}

export default useHats;
