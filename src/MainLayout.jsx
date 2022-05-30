/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import CityRow from "./CityRow";

function MainLayout() {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [searchValue, setSearchValue] = useState("india");

  const options = {
    method: "GET",
    url: `https://daily-petrol-price-in-india.p.rapidapi.com/${searchValue}`,
    headers: {
      "X-RapidAPI-Host": "daily-petrol-price-in-india.p.rapidapi.com",
      "X-RapidAPI-Key": "6aa46a3947msh16ef00bcf3c4794p1701f5jsn486f8e3b84fb",
    },
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value.toLowerCase().trim());
    console.log(searchValue);
  };

  const getFuelPrices = () => {
    const responsePromise = axios.request(options);
    return responsePromise.then((response) => {
      const fuel = response.data;
      setFuelPrices(fuel);

      console.log(fuel);
      return fuel;
    });
  };
  /* useEffect(() => {
    const token = getFuelPrices();
    token.then((f) => {
      setFuelPrices(f);

      console.log(f);
    });
  }, []);*/

  const go = () => {
    getFuelPrices(searchValue);
  };

  return (
    <div>
      <div className="p-20">
        <div className="flex items-center space-x-4 rounded-md">
          <div className="text-xl font-semibold">Search for your State:</div>
          <input
            placeholder="enter a state"
            className="py-2 bg-gray-200 rounded-md w-80"
            type="text"
            onChange={handleChange}
            value={searchValue}
          />
          <button
            className="px-6 py-2 text-lg font-semibold text-white bg-green-600 rounded-md"
            onClick={go}
          >
            Get latest price
          </button>
        </div>
        <div className="flex justify-between p-4 mt-6 border-2 border-black">
          <p className="sm:w-80">City</p>
          <p>Today' Price</p>
          <p>Yesterdays's Price</p>
        </div>
        <div>
          {" "}
          {fuelPrices.map((f) => (
            <CityRow data={f} key={f.City}></CityRow>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
