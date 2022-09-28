import axios from "axios";
import React, { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import "../Styles/Countries.css";

const Countries = () => {
  let [countries, setCountries] = useState([]);
  const [sortVal, setSortVal] = useState("");
  console.log("countries:", countries);

  

  let allCountriesUrl = "https://restcountries.com/v2/all";

  const sortCountries = (sortValue) => {
    return setCountries([
      ...countries.sort((a, b) => {
        if (sortValue == "asc") {
          return a.population - b.population;
        } else if (sortValue == "desc") {
          return b.population - a.population;
        } else return countries;
      }),
    ]);
  };

  const getCountries = (url) => {
    axios
      .get(url)
      .then((r) => {
        setCountries(r.data);
      })
      .catch((e) => console.log(e));
  };

  const handleSort = (e) => {
    let sortValue = e.target.value;
    setSortVal(sortValue);
    sortCountries(sortValue);
  };

  const handleFilter = (e) => {
    let region = e.target.value;
    let regionUrl = `https://restcountries.com/v2/region/${region}`;
    getCountries(regionUrl);
  };

  useEffect(() => {
    getCountries(allCountriesUrl);
  }, []);
  return (
    <div className="mainContainer">
      <div className="filterSort">
        <select onChange={handleSort}>
          <option value="">Any</option>
          <option value="asc">low to high</option>
          <option value="desc">high to low</option>
        </select>
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>

        
      </div>
      <div className="cardContainer">
        {countries.map((i) => {
          return <CountriesCard items={i} key={Number(i.numericCode)} />;
        })}
      </div>
    </div>
  );
};

export default Countries;
