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
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
// import { Provider } from "react-redux";
// import store from "./utils/store";

const Applayout = () => {
  return (
    <>
      <Provider store={store}>
        <Nav />
        
        <Outlet />
        <Footer />
      </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resId",
        element: <RestaurantsDetails />,
      },
    ],
  },
]);

export default App;
