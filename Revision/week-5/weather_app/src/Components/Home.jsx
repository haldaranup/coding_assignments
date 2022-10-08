import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [city, setCity] = useState("delhi");
  const [data, setData] = useState();
  const [date, setDate] = useState();
  let key = "c75fe9c69f2998626a75414a88c26470";
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const handleSearch = () => {
    getWeather();
  };

  const getWeather = () => {
    axios.get(weatherApi).then((r) => {
      console.log(r.data);
      setData(r.data);
    });
  };

  return (
    <div>
      <h2>Weather App</h2>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.main.temp}</p>
          <p>{data.main.pressure}</p>
          <p>{data.main.humidity}</p>
          <p>
            {new Date(data.sys.sunrise).getHours() +
              ":" +
              new Date(data.sys.sunrise).getMinutes()}
          </p>
          <p>
            {new Date(data.sys.sunset).getHours() +
              ":" +
              new Date(data.sys.sunset).getMinutes()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
