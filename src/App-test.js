import React from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLogin: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>
        {
            return {
                isLogin: !prevState.isLogin
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.isLogin ? "Logged in": "Logged out"}</h1>
                <button onClick={this.handleClick}>{!this.state.isLogin ? "Logged in": "Logged out"}</button>
            </div>
        )
    }
}

export default App
