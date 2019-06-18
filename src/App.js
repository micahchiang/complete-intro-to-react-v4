import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
