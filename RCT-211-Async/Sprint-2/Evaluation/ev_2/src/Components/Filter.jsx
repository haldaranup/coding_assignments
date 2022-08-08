import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState(initialState || []);

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

  useEffect(() => {
    setSearchParams({ category: category });
  }, [category]);
  return (
    <div className="filter">
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            defaultChecked={category.includes("Analog")}
            onChange={handleFilter}
          />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" defaultChecked={category.includes("Digital")}
            onChange={handleFilter} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" defaultChecked={category.includes("Chronograph")}
            onChange={handleFilter} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
