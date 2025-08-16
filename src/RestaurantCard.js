import React from "react";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const {
    resData: {
      info: {
        name = "",
        cuisines = [],
        avgRatingString = "",
        sla: {deliveryTime = "" } = {},
        cloudinaryImageId = "",
      } = {},
    } = {},
  } = props;
  return (
    <div className="res-card">
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        className="res-image"
        alt="restaurant-image"
      />
      <h4> { name } </h4>
      <h5> { cuisines?.join(", ") } </h5>
      <h5> { avgRatingString } Ratings </h5>
      <h5> { deliveryTime } minutes </h5>
    </div>
  );
};

export default RestaurantCard;

export const withTravelTime = (RestaurantCard) => {
  return (props) => {
    return <div>
      <label> {props.timeString} </label>
      <RestaurantCard {...props} />
    </div>
  }
}