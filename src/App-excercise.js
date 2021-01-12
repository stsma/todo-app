// import React from "react";

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count: 0,
//         }

//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState=>{
//                 return{
//                     count: prevState.count + 1
//                 }
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App;

// import React from "react"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return{
//                 count: prevState.count + 1
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App


// import React from "react";

// function App() {
//     return (
//         <div>
//             <img onMouseOver={()=>alert("Hello alert from image!")} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={()=> alert("test") }>Click me</button>
//         </div>
//     )
// }


// // Given a stateless functional component, add state to it
// // state should have a property called `isLoggedIn` which is a boolean
// // (true if logged in, false if not)
// // Then, give your best shot at rendering the word "in" if the user is logged in
// // or "out" if the user is logged out.

// // class AppPractice extends React.Component {
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             isLoggedIn: true
// //         }
// //     }

// //     render(){
// //         return (
// //             <div>
// //                 <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
// //             </div>
// //         )}
// // }

// // import React, { Component } from "react";

// // // Challenge:
// // // Given an incomplete class-based component without a constructor, 
// // // add a constructor and initialize state to fix the broken component.

// // class App extends Component {
// //     constructor(){
// //         super();
// //         this.state={
// //             name: "Sally",
// //             age: 32
// //         }
// //     }

// //     render(){
// //         return (
// //             <div>
// //                 <h1>{this.state.name}</h1>
// //                 <h3>{this.state.age} years old</h3>
// //             </div>
// //         )
// //     }
// // }

// // class App extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             answer: "No"
// //         }
// //     }

// //     render(){
// //         return(
// //             <div>
// //                 <h1>Is state important to know? {this.state.answer}</h1>
// //                 <ChildComponent answer={this.state.answer}/>
// //             </div>
// //         )
// //     }
// // }

// // class ChildComponent extends React.Component{
// //     render(){
// //         return(
// //             <div>
// //                 {this.props.answer}
// //             </div>
// //         )
// //     }
// // }

// export default App;