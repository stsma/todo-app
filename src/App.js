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
            age:"",
            gender: undefined,
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value, type, checked } = event.target
        type === "checkbox" ? 
            this.setState(prevState => {
                return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }}) :  this.setState({ [name]: value })

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
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange} />Male       
                    </label>             
                    <label>         
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange} />Female       
                    </label>
                    <br />
                    
                    <select 
                        value={this.state.destination} 
                        name="destination" 
                        onChange={this.handleChange}>

                        <option value="">-- Please Choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isVegan}
                        /> Vegan?
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isKosher}
                        /> Kosher?
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <div>
                    Your dietary restrictions:
                    <br/>
                    <p>{this.state.dietaryRestrictions.isVegan ? "Vegan" : ""}</p>
                    <p>{this.state.dietaryRestrictions.isKosher ? "Kosher" : ""}</p>
                    <p>{this.state.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}</p>
                </div>
            </main>
        )
    }
}

export default App
