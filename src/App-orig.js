// import React from "react";
// import logo from './logo.svg';
// import './App.css';

// import Footer from "./components/Footer.js";
// import Header from "./components/Header.js";
// import MainContent from "./components/MainContent.js";
// import ContactCard from './components/ContactCard';
// import Joke from './components/Joke';

// import jokesData from "./JokesData"
// import productsData from "./vschoolProducts"
// import Product from './components/Product';

// import todosData from './todosData';
// import ToDoItem from './components/ToDoItem';

// /*
// In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

// Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

// Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
// */

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             todosdata: todosData
//         }
//     }

//     render(){
//         const todos = this.state.todosdata.map(item => <ToDoItem key={item.id} item={item} />);

//         return(
//             <div className="todo-list">
//                 {todos}
//             </div>
//         )
//     }


//     // const productComponents = productsData.map(product => 
//     //         <Product key={product.id} name={product.name} price={product.price} description={product.description} />
//     //     );

//     // return(
//     //     <div>
//     //         {productComponents}
//     //     </div>
//     // )
//     // const JokeComponents = jokesData.map(joke => 
//     //     <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
//     // )

//     // return(
//     //     <div>
//     //         {JokeComponents}
//     //     </div>
//     // )
// }

// export default App;
