import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restList from "../utils/restList";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local state variable - using useState hook
  const [restaurantList, setrestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setrestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
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
