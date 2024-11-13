import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>ReactElement- JSObject => HTMLElement(on rendering)
// const heading = React.createElement(
//   "h1",
//   {id: "heading"},
//   "Namaste React"
// );

// console.log(heading)

// JSX - HTML like or XML like syntax
// JSX is transpiled before it reaches the JS Engine  => done by parcel - gives responsibilty to babel package for this

//JSX => Babel transpile it to React.createElement => ReactElement => JS Object => HTML element
const Title = () => (
 <h1 className="head" tabIndex={5}>
    Namaste React using JSX🚀🚀
  </h1> //This is a react element
);
//React component (2 types)
// 1. Functional component - NEW
// 2. Class based component - OLD


//React Functional Component
// const HeadingComponent = () => {
//   return <h1>Namaste React  using Funtional Component🚀</h1>
// };

//This is component Composition(Component inside component)
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React using Functional Component</h1>
  </div>
);
//HeadingComponent and HeadingComponent2 both are same

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent />) //This is how we render React Component


