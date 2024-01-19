import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantmenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h4>{costForTwoMessage + " : " + cuisines.join(",")}</h4>
      <h2>Menu</h2>
      <ul className="menu">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
