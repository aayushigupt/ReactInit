import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    )
      .then((data) => data.json())
      .then((result) => setResData(result));
  }, []);

  if (resData === null) return <div> Loading...</div>;

  const { name, cuisines } = resData?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h2> {name} </h2>
      <h4> {cuisines?.join(", ")} </h4>
      {resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.map(
        (eachItem) => {
          return (
            <div>
              {" "}
              {eachItem?.card?.info?.name} - {eachItem?.card?.info?.price / 100}{" "}
            </div>
          );
        }
      )}
    </div>
  );
};

export default RestaurantMenu;
