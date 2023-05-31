import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./App";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={App} />);



