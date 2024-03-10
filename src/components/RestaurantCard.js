import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; //object destructuring
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rest-card m-1 p-4 w-[240px] bg-blue-50 hover:bg-blue-100 hover:m-2 rounded-lg">
      <img
        className="rest-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
