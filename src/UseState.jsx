import React, { useState } from "react";
function UseState() {
    // const [count, setCount] = useState(() => {
    //     console.log("constructor")
    //     return 0
    // })
    // const [name, setName] = useState("Increment")
    const [state, setState] = useState({ count: 0, name: "Increment" })
    const count = state.count
    const name = state.name
    function increment() {
        // setCount(prevCount => prevCount + 1)
        setState(prevState => {
            return { ...prevState, name: "Increment", count: prevState.count + 1 }
        })
    }

    function decrement() {
        // setCount(prevCount => prevCount - 1)
        setState(prevState => {
            return { ...prevState, name: "Decrement", count: prevState.count - 1 }
        })
    }
    return (<>
        {name}<br />
        <button onClick={increment}>+</button> {count} <button onClick={decrement}>-</button>
    </>)
}
export default UseState;