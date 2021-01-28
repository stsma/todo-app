import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender:null,
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
        console.log(event.target);
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                    
                <textarea 
                    value="Some default value."
                    onChange={this.handleChange}
                /> 
                <br/>                
                <input 
                    type="checkbox" 
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                />Is Friendly?
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>

                <h2>Your favorite color is {this.state.favColor}</h2>
                <select onChange={this.handleChange}
                    name="favColor">
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                </select>

                <h2>{this.state.gender === null ? "" : 
                    "You are a " + this.state.gender }</h2>

                <button>Submit</button>
            </form>
        )
    }
}


export default App
