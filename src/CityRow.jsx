/** @format */

import React from "react";

function CityRow({ data }) {
  return (
    <div>
      <div className="bg-gray-300 p-2 my-2">
        <p>{data.City}</p>
        <p>{data.PriceToday}</p>
        <p>{data.TodaysPrice}</p>
      </div>
    </div>
  );
}

export default CityRow;
