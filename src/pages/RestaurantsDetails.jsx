import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, IMG_CDN_URL, MENU_IMG_CDN_URL } from "../constants";

const RestaurantsDetails = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});

  const menuInfo = restaurant?.cards?.[0]?.card?.card?.info;
  const menuItems =
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    restaurant?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FETCH_MENU_URL + resId);
      const json = await response.json();
      console.log(json.data);
      setRestaurant(json.data);
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
    }
  }

  return (
    <div className="mx-10 mt-20 overflow-hidden">
      {/* main section */}
      <div className="flex justify-between">
        <div>
          <h1>{menuInfo?.name}</h1>
          <p>{menuInfo?.cuisines.join(" , ")}</p>
          <div className="flex gap-4">
            <p>{menuInfo?.areaName}</p>
            <p>{menuInfo?.sla?.lastMileTravelString}</p>
          </div>
        </div>
        <div>
          <p>{menuInfo?.avgRatingString}</p>
          <p>{menuInfo?.totalRatingsString}</p>
        </div>
      </div>
      <div>
       <p> {menuInfo?.sla?.slaString}</p>
       <p> {menuInfo?.costForTwoMessage}</p>
      </div>
      <div className="border border-gray-700 mb-4"></div>

      {/* Menu Items */}

      {menuItems?.map((item, index) => (
        <div
          className="flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]"
          key={index}
        >
          <div className="w-[calc(100%_-_140px)]">
            <div
              className={
                item?.card?.info?.isVeg
                  ? "flex justify-center items-center w-4 h-4 border-2 border-green-600"
                  : "flex justify-center items-center w-4 h-4 border-2 border-red-600"
              }
            >
              <span
                className={
                  item?.card?.info?.isVeg
                    ? "w-2 h-2 rounded-full bg-green-600"
                    : "w-2 h-2 rounded-full bg-red-600"
                }
              ></span>
            </div>
            <div className="mt-2 font-bold text-base">
              {item?.card?.info?.name}
            </div>
            <div className="mt-2 font-mono">
              ₹
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </div>
            <div className="mt-4 text-sm">{item?.card?.info?.description}</div>
          </div>
          <div className="ml-2 w-[118px] h-[120px] relative">
            <div className="w-[118px] h-24">
              {item?.card?.info?.imageId === "" ? (
                <img
                  loading="lazy"
                  className="w-[118px] h-24 rounded-lg object-cover"
                  src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                />
              ) : (
                <img
                  loading="lazy"
                  className="w-[118px] h-24 rounded-lg object-cover"
                  src={MENU_IMG_CDN_URL + item?.card?.info?.imageId}
                />
              )}
            </div>

            <div className="absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold">
              {/* <div>
                <span>{cartItems[item?.card?.info?.id]?.quantity || 0}</span>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsDetails;
