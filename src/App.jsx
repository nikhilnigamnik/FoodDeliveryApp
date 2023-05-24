import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Error from "./components/Error";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./pages/About";
import RestaurantsDetails from "./pages/RestaurantsDetails";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./pages/Contact";

const Applayout = () => {
  return (
    <>
      <Nav />
      <Outlet  />
      {/* <Header />
      <Body /> */}
    </>
  );
};

const App = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: (
          <>
            <Header />
            <Body />
          </>
        ),
      },
      {
        path: "/resturant/:ids",
        element: <RestaurantsDetails />,
      },
    ],
  },
]);

export default App;
