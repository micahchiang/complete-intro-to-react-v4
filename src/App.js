import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
