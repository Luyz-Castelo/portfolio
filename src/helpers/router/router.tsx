import { createBrowserRouter } from "react-router-dom";
import { Contact } from "../../pages/Contact/Contact";
import { Home } from "../../pages/Home/Home";
import { Projects } from "../../pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);
