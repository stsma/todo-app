import React, { Component } from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: "No"
        }
    }

    render(){
        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}

class ChildComponent extends React.Component{
    render(){
        return(
            <div>
                {this.props.answer}
            </div>
        )
    }
}

export default App;