import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [index, setIndex] = useState(0);

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <div> Loading...</div>;

  const { name, cuisines } = resData?.data?.cards[2]?.card?.card?.info;

  const categories =
    resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories)

  return (
    <div>
      <h2> {name} </h2>
      <h4> Cuisines: {cuisines?.join(", ")} </h4>
      {categories?.map((category, i) => <RestaurantCategory categoryData={category} setIndex={() => setIndex(i)} openCategory={index === i} /> )}
    </div>
  );
};

export default RestaurantMenu;
