import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";

const BASE_URL: string = '/portfolio'

export const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Home />
  },
  {
    path: '*',
    element: <Error />
  }
]);
