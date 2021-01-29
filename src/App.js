import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age:0,
            gender: null,
            location: "",
            restrictions: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(this.state);
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        placeholder="First Name" 
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="age" 
                        placeholder="Age" 
                        onChange={this.handleChange} 
                    />
                    <br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.restrictions}
                </p>
            </main>
        )
    }
}

export default App
