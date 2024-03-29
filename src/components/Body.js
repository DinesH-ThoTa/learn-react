import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { REST_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variable - using useState hook
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_LIST_URL);

    const json = await data.json();
    setrestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = useOnlineStatus();
  if (status === false) {
    return <h1>you are offline</h1>;
  }
  if (restaurantList === undefined) {
    return <h1>Restaurants not found...Please try after a while.. </h1>;
  }
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-1 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 m-1 py-0.5 bg-blue-200 rounded-lg"
            onClick={() => {
              setSearchedRestaurants(
                restaurantList.filter((rest) =>
                  rest.info.name
                    .toUpperCase()
                    .includes(searchText.toUpperCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-1 flex items-center">
          <div className="px-4 m-1 py-0.5 bg-blue-200 rounded-lg">
            <button
              className="top-rated"
              onClick={() => {
                let filteredRestaurantList = restaurantList.filter(
                  (rest) => rest.info.avgRating > 4
                );
                setSearchedRestaurants(filteredRestaurantList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className="rest-container flex flex-wrap">
        {searchedRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
