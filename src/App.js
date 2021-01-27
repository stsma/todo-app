import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState(prevState => {
            return { loading: true }
        })

        setTimeout(() => {
            fetch("https://swapi.dev/api/people/1")
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            loading: false,
                            character: data
                        })
                })
                
            this.setState(prevState => {
                return { loading: false }
            })
        }, 1000);
    }
    
    render() {
            const text = this.state.loading ? "loading..." : this.state.character.name;
            return (
                <div>
                    <p>{text}</p>
                </div>
            )
    }
}

export default App
