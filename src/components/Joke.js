import { React } from "react";
import ReactDOM from 'react-dom';

function Joke(props){
    
    return(
        <div>
            <h3 style={{display: !props.question ? "none": "block"}}>{props.question}</h3>
            <h4>{props.punchLine}</h4>
        </div>
    )
}

export default Joke