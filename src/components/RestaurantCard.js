import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; //object destructuring
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
