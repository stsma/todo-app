import React, { Component } from "react";

function FormComponent(props) {
    return(
        <main>
            <form>
                <input 
                    name="firstName" 
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleChange}
                />
                <br />
                <input 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={props.handleChange}
                />
                <br />
                <input 
                    name="age" 
                    placeholder="Age" 
                    onChange={props.handleChange} 
                />
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange} />Male       
                </label>             
                <label>         
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange} />Female       
                </label>
                <br />
                
                <select 
                    value={props.data.destination} 
                    name="destination" 
                    onChange={props.handleChange}>

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
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <div>
                Your dietary restrictions:
                <br/>
                <p>{props.data.dietaryRestrictions.isVegan ? "Vegan" : ""}</p>
                <p>{props.data.dietaryRestrictions.isKosher ? "Kosher" : ""}</p>
                <p>{props.data.dietaryRestrictions.isLactoseFree ? "Lactose Free" : ""}</p>
            </div>
        </main>
    )
}

export default FormComponent;