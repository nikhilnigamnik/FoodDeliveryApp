import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <>
      <div className="border h-[100%] gap-2 flex flex-col justify-between p-4 hover:shadow-lg transition-all">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-semibold">{name}</h2>
        <h5 className="text-gray-700">{cuisines.join(", ")}</h5>
        <h6 className="text-gray-700">{area}</h6>
        <span className="flex justify-between">
          <h4 className="text-red-500">{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    </>
  );
};

export default RestaurantCard;
