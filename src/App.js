import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>1. what is react js?</div>

      <div>React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components</div>


      <div>2. virtual dom?</div>

      <div>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.</div>


      <div>3. real dom?</div>

      <div>It represents the entire UI(User Interface) of the web application as the tree data structure. It is a structural representation of HTML elements of a web application in simple words. Whenever there is any change in the state of the application UI, DOM is updated and represents the change.</div>


      <div>4. props?</div>

      <div>the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.</div>


      <div>5. state?</div>

      <div> The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders</div>


      <div>6. strict mode</div>

      <div>StrictMode is a tool that highlights potential issues in a programme. It works by encapsulating a portion of your full application as a component. StrictMode does not render any visible elements in the DOM in development mode, but it enables checks and gives warnings</div>


      <div>7. Fragment tag?</div>

      <div>​ React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element.</div>


      <div>8. difference b/w class and functional components</div>

      <div>Functional components cannot use React lifecycle methods, such as componentDidMount. Class components can use React lifecycle methods (for example, componentDidMount, componentWillUnmount etc). There is no use of constructors. Since the state needs to be stored, constructors are utilized.</div>


      <div>9. difference b/w stateless and stateful components</div>

      <div>In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props.</div>


      <div>10. react life cycle method</div>

      <div>React has five built-in methods that gets called, in this order, when a component is updated:
1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate
</div>


      <div>11. what is babel</div>

      <div>Babel is a JavaScript compiler​ Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
</div>


      <div>12. what is component</div>

      <div>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</div>


      <div>13. Jsx?</div>

      <div>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.</div>


      <div>14. HOC</div>      

      <div>Concretely, a higher-order component is a function that takes a component and returns a new component.</div>


    </div>
  );
}

export default App;
