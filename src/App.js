/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/
import React, {Component} from "react"
import ReactDOM from "react-dom"

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }


//#1 answer:
class App extends React.Component{
    render(){
        return(
        <div>
            <Header username="Stephen" />
            <Greeting />
        </div>
    )}
}


// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

// #2 Answer:
class Header extends React.Component {
    render (){
        return(
        <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
        )}
}

//#region 
// // #3
// function Greeting() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }
//#endregion

class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default App;


// ReactDOM.render(<App />, document.getElementById("root"))
