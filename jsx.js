import React from "react";

//React.createElement => React Element - JS Object => Rendering(HTML Element)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// JSX => syntax extension of js, syntax like HTML, XML

// JSX(transpiled before it reaches JSE) - Parcel - Babel

// JSX => (transpile-Babel) => React.createElement => React Element - JS Object => Rendering(HTML Element)

const jsxHeading = <h1 id="headingJsx">"Hello using jsx"</h1>;
