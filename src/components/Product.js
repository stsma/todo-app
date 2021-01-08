import react from "react";

function Product(props){
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Price: {props.price}</h4>
            <div>Description: {props.description}</div>
        </div>
    )
}

export default Product