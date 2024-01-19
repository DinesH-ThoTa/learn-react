import { useEffect, useState } from "react";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantmenu;
