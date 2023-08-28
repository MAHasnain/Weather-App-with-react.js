import React from "react";


const TopBottons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Tokyo",
    },
    {
      id: 3,
      title: "Dubai",
    },
    {
      id: 4,
      title: "Shanghai",
    },
    {
      id: 5,
      title: "Istanbul",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium"
        onClick={() => setQuery ({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopBottons;
