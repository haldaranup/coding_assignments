import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("genre");
  const initialSort = searchParams.get("sort");
  const [category, setCategory] = useState(initialState || []);
  const [sortBy, setSortBy] = useState(initialSort || []);

  const handleFilter = (e) => {
    let option = e.target.value;
    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    let option = e.target.value;
    setSortBy(option);
  };

  useEffect(() => {
    setSearchParams({ genre: category, sort: sortBy });
  }, [category, sortBy]);

  return (
    <div className="filterContainer">
      <div>
        <input
          type="checkbox"
          value="K-Pop"
          defaultChecked={category.includes("K-Pop")}
          onChange={handleFilter}
        />
        K-Pop
      </div>
      <div>
        <input
          type="checkbox"
          value="Country"
          defaultChecked={category.includes("Country")}
          onChange={handleFilter}
        />
        Country
      </div>
      <div>
        <input
          type="checkbox"
          value="Pop"
          defaultChecked={category.includes("Pop")}
          onChange={handleFilter}
        />
        Pop
      </div>
      <div>
        <input
          type="checkbox"
          value="Hard Rock"
          defaultChecked={category.includes("Hard Rock")}
          onChange={handleFilter}
        />
        Hard Rock
      </div>
      <div>
        <input
          type="checkbox"
          value="Holiday"
          defaultChecked={category.includes("Holiday")}
          onChange={handleFilter}
        />
        Holiday
      </div>
      <div>
        <input
          type="checkbox"
          value="Heavy Metal"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleFilter}
        />
        Heavy Metal
      </div>
      <h4>Sort by Year</h4>
      <div>
        <div>
          <input
            name="sort"
            type="radio"
            value="any"
            onChange={handleSort}
            defaultChecked={sortBy === "any"}
          />
          Any
        </div>
        <div>
          <input
            name="sort"
            type="radio"
            value="asc"
            onChange={handleSort}
            defaultChecked={sortBy === "asc"}
          />
          Ascending
        </div>

        <div>
          <input
            name="sort"
            type="radio"
            value="desc"
            onChange={handleSort}
            defaultChecked={sortBy === "desc"}
          />
          Descending
        </div>
      </div>
    </div>
  );
};

export default Filter;
