import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";

const App = () => {
  const router = createBrowserRouter([
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
