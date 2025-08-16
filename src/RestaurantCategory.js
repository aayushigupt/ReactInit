import React, { useState } from "react";

export default function RestaurantCategory({ categoryData, setIndex, openCategory }) {
  return (
    <div className="category-content">
      <div
        className="category-title"
        onClick={() => {
          setIndex();
        }}
      >
        {categoryData?.card?.card?.title}
      </div>
      {openCategory && (
        <div className="category-item">
          {categoryData?.card?.card?.itemCards?.map((item) => {
            return (
              <div className="category-item-title">
                <div> {item?.card?.info?.name} </div>
                <div>
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
