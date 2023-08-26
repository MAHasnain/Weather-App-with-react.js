import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopBottons from "./Components/TopBottons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempratureAndDetails from "./Components/TempratureAndDetails";
import Forecasts from "./Components/Forecasts";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopBottons/>
      <Inputs />
      <TimeAndLocation />
      <TempratureAndDetails />
      <Forecasts/>
    </div>
  );
}

export default App;
