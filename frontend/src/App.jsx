import React from "react";
import { createBrowserRouter, RouterProvider ,createHashRouter} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Consultation from "./pages/Consultation";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/consultation",
          element: <Consultation />,
        },
      ],
    },
    {
      path: "profile",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
