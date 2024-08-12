import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Crew, Destination, Technology } from "../Pages/Pages";

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
