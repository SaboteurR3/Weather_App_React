import "./App.css";
import React from "react";
import { useState } from "react";
import { weatherContext } from "../src/Context/weatherContext";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  const [weather, setWeather] = useState("");
  const [savedWeather, setSavedWeather] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <weatherContext.Provider
      value={{
        weather,
        setWeather,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        savedWeather,
        setSavedWeather,
      }}
    >
      <main className={`app ${savedWeather}`}>
        <MainContent />
      </main>
    </weatherContext.Provider>
  );
}

export default App;
