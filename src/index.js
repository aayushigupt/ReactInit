import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "./utils/context/UserContext";
// import Grocery from "./Grocery";
const About = lazy(() => import("./About"));
const Grocery = lazy(() => import("./Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Aayushi Gupta");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

/**
 * The following is the original way of writing React code using React.createElement.
 * It demonstrates how to create elements without using JSX.
 */
// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("h1", { id: "heading", att: "random" }, "Hello World, This is h1 tag"),
//     React.createElement("h2", { id: "heading", att: "random" }, "Hello World, This is h2 tag")
// ]);
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div> Loading... </div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
