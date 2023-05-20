import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantsDetails = () => {
  const { ids } = useParams();
  const [rest, setRest] = useState({});

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setRest(json.data);
  }

  return (
    <>
      <h1>{rest.name} {ids}</h1>
    </>
  );
};

export default RestaurantsDetails;
