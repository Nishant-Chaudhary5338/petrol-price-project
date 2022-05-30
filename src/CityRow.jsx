/** @format */

import React from "react";

function CityRow({ data }) {
  return (
    <div>
      <div className="flex justify-between p-2 px-4 my-2 bg-gray-300">
        <p className="sm:w-80">{data.City}</p>
        <p className="-ml-14">{data["Today's Price"]}</p>
        <p>{data["Yesterday's Price"]}</p>
      </div>
    </div>
  );
}

export default CityRow;
