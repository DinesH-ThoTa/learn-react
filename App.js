import React from "react";
import ReactDOM from "react-dom/client";

// Functional component

const HeadingComponent = () => {
  return <h1 className="heading">"Hello From React Functional component"</h1>;
};

// React element
const Title = <h1 className="title">Title</h1>;

//component composition
const HeadingComponentShortSyntax = () => (
  <div id="container">
    {Title}
    <h1 className="heading">"Hello From React Functional component"</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponentShortSyntax />);
