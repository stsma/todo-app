import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    //1.
    // component did just mount. Method will run once while the component is showing up the screen.
    //this will not reload during re-render.
    componentDidMount(){
        //API calls
    }

    //2.
    //deprecated
    componentWillReceiveProps(nextProps){
        // if(nextProps.whatever !== this.props.whatever)
        // {}   
    }

    //3.
    //deprecated
    shouldComponentUpdate(nextProps, nextState){
        //return true if want to udate
        //return false if not
    }

    //4.
    //deprecated
    componentWillUnmount(){
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }

    //5.
    //new
    //discourages to use by React team.
    static getDerivedStateFromProps(props, state){
        //return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    6.
    //new
    //not commonly used.
    getSnapshotBeforeUpdate(){
        //create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App


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