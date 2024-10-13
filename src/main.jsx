import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { Error, Event, Faq, Team,CfStandings } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/event/:id",
    element: <Event />,
  },
  {
    path: "/event/2/standings",
    element: <CfStandings />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
