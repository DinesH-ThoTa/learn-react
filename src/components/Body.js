import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/restList";

const Body = () => {
  // Local state variable - using useState hook
  const [restaurantList, setrestaurantList] = useState(restList);
  // const arr = useState(restList);
  // console.log(arr);
  // const restaurantList = arr[0];
  // const setrestaurantList = arr[1];
  // [restaurantList, setrestaurantList]
  let restaurantListJS = [
    {
      info: {
        id: "25251",
        name: "Meridian Restaurant",
        cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
        cuisines: ["Biryani", "Chinese", "Kebabs"],
        avgRating: 4.3,
        sla: {
          deliveryTime: 23,
        },
      },
    },
    {
      info: {
        id: "25252",
        name: "KFC",
        cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
        cuisines: ["Biryani", "Chinese", "Kebabs"],
        avgRating: 3,
        sla: {
          deliveryTime: 23,
        },
      },
    },
    {
      info: {
        id: "25253",
        name: "MCD",
        cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
        cuisines: ["Biryani", "Chinese", "Kebabs"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 23,
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-rated"
          onClick={() => {
            let filteredRestaurantList = restaurantList.filter(
              (rest) => rest.info.avgRating > 4
            );
            setrestaurantList(filteredRestaurantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
