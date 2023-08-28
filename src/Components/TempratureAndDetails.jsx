import { formatToLocalTime } from "../Services/weatherService";

import React from "react";
import {
  UilTemperatureEmpty,
  UilTemperaturePlus,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TempratureAndDetails = ({weather : {
  details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        {details}
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-10 ml-2" />
        <p className="text-5xl ml-7">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Sunrise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Sunset: <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <UilTemperaturePlus />
        <p className="font-light">
          High: <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilTemperatureEmpty />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureAndDetails;
