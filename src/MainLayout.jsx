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
    setSearchValue(event.target.value);
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
        <div className="flex space-x-4 items-center rounded-md">
          <div className="text-xl font-semibold">Search for your State:</div>
          <input
            placeholder="enter a state"
            className="py-2 rounded-md bg-gray-200 w-80"
            type="text"
            onChange={handleChange}
            value={searchValue}
          />
          <button
            className="bg-green-600 text-lg font-semibold rounded-md text-white px-6 py-2"
            onClick={go}
          >
            Get latest price
          </button>
        </div>
        <div className="border-2 border-black p-4 mt-6 flex justify-between">
          <p>City</p>
          <p>Today' Price</p>
          <p>Yesterdays's Price</p>
          <p>Change</p>
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
