import React from "react"

function Conditional(props) {
    return(
        <div>{props.isLoading ? "Loading..." : "Some cool stuff about conditional rendering"}</div>
    )
}

export default Conditional