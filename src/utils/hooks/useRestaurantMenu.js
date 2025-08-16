import React, { useEffect, useState } from "react";

export default function useRestaurantMenu(resId) {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    )
      .then((data) => data.json())
      .then((result) => setResData(result));
  }, []);

  return resData;
}
