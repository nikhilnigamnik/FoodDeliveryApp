// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import NoMatchfound from "./NoMatchfound";
import { RESTAURANTS_URL } from "../constants";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;
  const allResturantCount = allRestaurants ? allRestaurants.length : 0;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Searching Section */}

      <div className="flex flex-col items-center justify-around sm:flex-row mt-12 mb-4">
        <div className="bg-gray-800 text-white rounded p-2 mb-2 sm:mb-0 sm:w-auto sm:mr-0  md:mr-2">
          <span className="">Total Restaurants: {allResturantCount}</span>
        </div>

        <div className="flex">
          <input
            className="border rounded-l-md p-2 sm:mb-0"
            type="text"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-800 p-2 text-white rounded-r-md"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid  gap-10 px-10 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurants?.length === 0 ? (
          <NoMatchfound />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/resturant/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
