import "../FooterContent/FooterContent.css";
import { useContext } from "react";
import DateComponent from "../DateComponent/DateComponent";
import { weatherContext } from "../../Context/weatherContext";
import "../../App.css";
const FooterContent = () => {
  const { weather } = useContext(weatherContext);

  return (
    <div className="MainContent">
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{DateComponent(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          <div className="otherStuff">
            <div className="otherStuffcomponents">
              Feels like: {weather.main.feels_like}°c
            </div>
            <div className="otherStuffcomponents">
              Humidity: {weather.main.humidity}%
            </div>
            <div className="otherStuffcomponents">
              Air pressure: {weather.main.pressure}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="WApp">Weather Forecast</h1>
          <section className="Search-Location">
            <h1>Search Location</h1>
          </section>
        </div>
      )}
    </div>
  );
};

export default FooterContent;
