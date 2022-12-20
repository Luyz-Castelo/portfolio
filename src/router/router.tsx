import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: '/github-page',
    element: <Home />
  },
  {
    path: '*',
    element: <Error />
  }
]);
