import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/constants/data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setListOfRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  };

  if (listOfRestaurants?.length === 0) return <Shimmer />;

  return (
    <div>
      <button
        className="top-res-btn"
        onClick={() => {
          const filteredList = resList?.filter(
            (eachRes) => eachRes?.info?.avgRating > 4
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Restaurants
      </button>
      <input
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button
        onClick={() => {
          const filteredList = restaurants?.filter((eachRes) =>
            eachRes?.info?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase())
          );
          setListOfRestaurants(filteredList);
        }}
      >
        {" "}
        Search{" "}
      </button>
      <div className="res-container">
        {listOfRestaurants?.map((eachRes) => (
          <Link to={"/restaurant/" + eachRes?.info?.id}>
            <RestaurantCard key={eachRes?.info?.id} resData={eachRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
