import "../HeaderContent/HeaderContent.css";
import React from "react";
import { useContext } from "react";
import { weatherContext } from "../../Context/weatherContext";
// API
const api = {
  key: "139686862cca1d3c5f262944fea8f26c",
  base: "https://api.openweathermap.org/data/2.5/",
};

const HeaderContent = () => {
  const { setWeather, query, setQuery, setIsLoading, setSavedWeather } =
    useContext(weatherContext);
  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(setIsLoading(true))
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          setIsLoading(false);
          setSavedWeather(result.weather[0].main);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
};

export default HeaderContent;
