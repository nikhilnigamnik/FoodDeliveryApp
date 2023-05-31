import { IMG_CDN_URL } from "../constants";
import { AiFillStar } from "react-icons/ai";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  slaString,
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
        <span className="flex items-center justify-between">
          <p className="bg-green-600 gap-1 px-1 flex items-center text-white"><AiFillStar/>{avgRating}</p>
          <h4 className="">{slaString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    </>
  );
};

export default RestaurantCard;
