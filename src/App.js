import React, { Component } from "react";

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends Component {
    constructor(){
        super();
        this.state={
            name: "Sally",
            age: 32
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             answer: "No"
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//                 <ChildComponent answer={this.state.answer}/>
//             </div>
//         )
//     }
// }

// class ChildComponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.answer}
//             </div>
//         )
//     }
// }

export default App;