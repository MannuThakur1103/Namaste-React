import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
// const Title = () => (
//  <h1 className="head" tabIndex={5}>
//     Namaste React using JSX🚀🚀
//   </h1> //This is a react element
// );
//React component (2 types)
// 1. Functional component - NEW
// 2. Class based component - OLD

//React Functional Component
// const HeadingComponent = () => {
//   return <h1>Namaste React  using Funtional Component🚀</h1>
// };

//This is component Composition(Component inside component)
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React using Functional Component</h1>
//   </div>
// );
//HeadingComponent and HeadingComponent2 both are same

//root.render(jsxHeading);

//EPISODE 04- TALK IS CHEAP , SHOW ME THE CODE




//use swiggy data to copy paste



//not using keys(not acceptable) <<<<< index as keys <<<<<<<<< unique id(best practice)


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //This is how we render React Component
