import "./App.css";
import { useState, useEffect } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopBottons from "./Components/TopBottons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempratureAndDetails from "./Components/TempratureAndDetails";
import Forecasts from "./Components/Forecasts";
import getFormattedWeatherData from "./Services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [query, setQuery] = useState({ q: "karachi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const changeBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threashold = units === "metric" ? 30 : 60;
    if (weather.temp <= threashold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${changeBackground()}`}
    >
      <TopBottons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} />
          <Forecasts title="hourly forecast" items={weather.hourly} />
          <Forecasts title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;

///5e1f945bf8c43870a4a5b2f2cf1a97c4
// https://api.openweathermap.org/data/2.5/weather?q={karachi}&appid={5e1f945bf8c43870a4a5b2f2cf1a97c4}
