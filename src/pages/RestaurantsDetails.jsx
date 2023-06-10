import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem, getTotalAmount } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";

import { FETCH_MENU_URL, IMG_CDN_URL, MENU_IMG_CDN_URL } from "../constants";
import MenuShimmer from "../components/MenuShimmer";

const RestaurantsDetails = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [sortedMenuItems, setSortedMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FETCH_MENU_URL + resId);
      const json = await response.json();

      setRestaurant(json.data);
      setIsLoading(false);
      const initialMenuItems =
        json.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards ||
        json.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards ||
        json.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards ||
        json.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards;

      setFilteredMenuItems(initialMenuItems || []);
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
      setIsLoading(false);
    }
  }

  const handleSortLowToHigh = () => {
    const sortedItems = [...filteredMenuItems].sort((a, b) => {
      const priceA =
        (a?.card?.info?.price || a?.card?.info?.defaultPrice) / 100;
      const priceB =
        (b?.card?.info?.price || b?.card?.info?.defaultPrice) / 100;
      return priceA - priceB;
    });

    setSortedMenuItems(sortedItems);
  };

  const handleSortHighToLow = () => {
    const sortedItems = [...filteredMenuItems].sort((a, b) => {
      const priceA =
        (a?.card?.info?.price || a?.card?.info?.defaultPrice) / 100;
      const priceB =
        (b?.card?.info?.price || b?.card?.info?.defaultPrice) / 100;
      return priceB - priceA;
    });

    setSortedMenuItems(sortedItems);
  };

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

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    dispatch(getTotalAmount());
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const filteredItems = menuItems?.filter((item) =>
        item?.card?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMenuItems(filteredItems);
    } else {
      setFilteredMenuItems(menuItems);
    }
  };

  const menuItemsCount = menuItems ? menuItems.length : 0;

  if (isLoading) {
    return <MenuShimmer />;
  }

  return (
    <div className="mx-10 mt-[4rem] overflow-hidden">
      {/* main section */}

      <div className="my-[2rem] border p-4">
        <div className="flex  menu-header justify-between">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex justify-center">
              <img
                width={300}
                className=""
                src={IMG_CDN_URL + menuInfo?.cloudinaryImageId}
              />
            </div>
            <div className="text-gray-700 flex flex-col gap-1">
              <h1 className="font-semibold text-lg">{menuInfo?.name}</h1>
              <p>{menuInfo?.cuisines.join(" , ")}</p>
              <p>{menuInfo?.areaName}</p>
              <p>{menuInfo?.sla?.lastMileTravelString}</p>
            </div>
          </div>

          <div className="border  p-4 gap-1 flex flex-col justify-center items-center rounded">
            <p className="flex text-green-600 items-center gap-1">
              <AiFillStar />
              {menuInfo?.avgRatingString}
            </p>
            <p className="border border-gray-200 w-full"></p>
            <p>{menuInfo?.totalRatingsString}</p>
          </div>
        </div>
      </div>

      {/* Search Input */}

      <div className="flex flex-col md:flex-row justify-around gap-4 mb-8 items-center">
        <div className="flex  gap-2 text-white rounded">
          <div className="p-2 bg-gray-800 rounded">
            Menu Items: {filteredMenuItems?.length || 0}
          </div>

          <button
            className="bg-gray-800 text-white rounded p-2"
            onClick={handleSortLowToHigh}
          >
            Sort: Low to High
          </button>
          <button
            className="bg-gray-800 text-white rounded p-2"
            onClick={handleSortHighToLow}
          >
            Sort: High to Low
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            className="border border-gray-300 p-2 mb-2 md:mr-2 md:mb-0 rounded"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-gray-800 text-white rounded p-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Menu Items Count */}

      {/* Menu Items */}

      {sortedMenuItems.length > 0
        ? sortedMenuItems.map((item, index) => (
            <div
              className="flex hover:shadow-md mb-4 justify-between items-center p-4 border transition duration-[0.3s]"
              key={index}
            >
              {/* ...existing code... */}
              <div className="">
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
                <div className="mt-2 font-semibold text-lg">
                  {item?.card?.info?.name}
                </div>
                <div className="mt-2 font-mono">
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </div>
                <div className="mt-4 text-sm">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="ml-2 flex items-center flex-col w-[118px] h-[120px] relative">
                <div className="w-[118px] h-24">
                  {item?.card?.info?.imageId === "" ? (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24  object-cover"
                      src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24  object-cover"
                      src={MENU_IMG_CDN_URL + item?.card?.info?.imageId}
                    />
                  )}
                </div>

                <div className="absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold">
                  <button
                    className="p-2"
                    onClick={() =>
                      cartItems[item?.card?.info?.id]?.quantity &&
                      handleRemoveItem(item?.card?.info)
                    }
                  >
                    <span>-</span>
                  </button>
                  <div>
                    <span>
                      {cartItems[item?.card?.info?.id]?.quantity || 0}
                    </span>
                  </div>
                  <button
                    data-testid="add-btn"
                    className="p-2 z-30"
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        : filteredMenuItems.map((item, index) => (
            <div
              className="flex hover:shadow-md mb-4 justify-between items-center p-4 border transition duration-[0.3s]"
              key={index}
            >
              <div className="">
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
                <div className="mt-2 font-semibold text-lg">
                  {item?.card?.info?.name}
                </div>
                <div className="mt-2 font-mono">
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </div>
                <div className="mt-4 text-sm">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="ml-2 flex items-center flex-col w-[118px] h-[120px] relative">
                <div className="w-[118px] h-24">
                  {item?.card?.info?.imageId === "" ? (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24  object-cover"
                      src="https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      className="w-[118px] h-24  object-cover"
                      src={MENU_IMG_CDN_URL + item?.card?.info?.imageId}
                    />
                  )}
                </div>

                <div className="absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold">
                  <button
                    className="p-2"
                    onClick={() =>
                      cartItems[item?.card?.info?.id]?.quantity &&
                      handleRemoveItem(item?.card?.info)
                    }
                  >
                    <span>-</span>
                  </button>
                  <div>
                    <span>
                      {cartItems[item?.card?.info?.id]?.quantity || 0}
                    </span>
                  </div>
                  <button
                    data-testid="add-btn"
                    className="p-2 z-30"
                    onClick={() => handleAddItem(item?.card?.info)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default RestaurantsDetails;
