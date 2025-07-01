import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./Header";
import Body from "./Body";


const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
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
const jsxHeading = <h1> Hello from JSX! I am not HTML</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
