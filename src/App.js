import { render } from "@testing-library/react"
import React, { useState } from "react"

function App(){
    const [ answer ] = useState("Yes")

    return (
        <div>
            <h2>Is State important to know? {answer}</h2>
        </div>
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App