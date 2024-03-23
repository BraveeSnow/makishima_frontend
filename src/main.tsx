import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/routes/Home";
import "@/style.css";
import NavBar from "./components/NavBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
