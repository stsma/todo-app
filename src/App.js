// https://scrimba.com/g/greacthooks

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    componentDidUpdate() {
        const newColor = new randomColor();
        console.log(newColor);
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App
