#namaste-react

#Parcel

- Dev Build
-Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundle
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- Host on HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

/*
*Header
  -logo
  -Nav Items
*Body
  -Search

  -ReastaurantCard
    -Restaurant
      -

*/

Two types of export/import

- default
- named

- Default export/import

  Syntax:-
    export default Component;
    import Component from 'path';

- Named export/import
Syntax:-
export const component;
import { component } from 'path';

-When you have to export multiple things, use named export.


#React hooks
- (Normal js utility funtion)
- Two very imp react hooks :-
    - useState() - SuperPowerful State Variable in React.
        - Why it is called state variable ?
        - Because it is used to maintain the state of the component.
    - useEffect()

- whenever a state variable updates, React will re-render the components.

- Read about react fiber architecture on acdlite github user.

//VVVVVI:-  whenever state variable update, react triggers a reconciliation cycle(re-renders the components)

//Episode 06
// Monolith Architecture
- Single codebase

//Epiosde 07
State variable are meant to be created on the higher level inside the functional components
- Don't ever create state variable inside if, for, func, or  any condition....it'll create inconsistency in our code
though JS allows us to do this.

//React-Router-Dom
// Provides {Link} to navigate thru diff pages
// Never ever use <a></a> for routing to diff pages in React as It'll reload the complete page
// Instead use <Link to = "path"></Link> for routing
// It'll just refreshes the component
// And that's why our app is c/a SPA.(Single Page Application)

// there are two types of routing in react web application
// 1. Client Side Routing (No network calls happens)
// 2. Server Side Routing (When any network calls happens while routing the pages)

//Episode 08
// Funtional Components - It's a piece of JS function that returns a piece of JSX.
// Class Components - It's a piece of JS class which extends React.component and it has a render method that returns a piece of JSX.
//This React.component is basically a class that is given to us by React.
//The only major difference between class based and function based component is the render method
//UserClass is inherinting some properties from it.
//In class-based component, props is received using the constructor

//EP08 Part 02
//Earlier, There was no react hooks like useState() and many more. A state is used to created whenever an instance of the class is created.
//And whenever an instance of the class is created , the constructor is called. And this is the best place to receive props and to create State Variables in class-based components.
//Never ever update State Variables directly. (this.state.count = this.state.count+1;)

//Episode 08 Part 03
// 
