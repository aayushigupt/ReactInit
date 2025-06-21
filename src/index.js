import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "heading", att: "random" }, "Hello World, This is h1 tag"),
    React.createElement("h2", { id: "heading", att: "random" }, "Hello World, This is h2 tag")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
