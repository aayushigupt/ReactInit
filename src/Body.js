import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/constants/data";

const Body = () => {
    return <div className="res-container">
        {resList?.map((eachRes) => (
          <RestaurantCard key={eachRes?.info?.id} resData={eachRes} />
        ))}
      </div>
}

export default Body;