import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import { Home, Crew, Destination, Technology } from "../Pages/Pages";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/Home"));
const Crew = lazy(() => import("../Pages/Crew/Crew"));
const Destination = lazy(() => import("../Pages/Destination/Destination"));
const Technology = lazy(() => import("../Pages/Technology/Technology"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "crew", element: <Crew /> },
      { path: "destination", element: <Destination /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);
