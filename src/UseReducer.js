import React, { useReducer, useState } from "react";
const initialState = { count: 0 }
function reducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'INCREMENT':
            return { count: state.count + 1 }
        default:
            return state
    }
    return state
}
function UseReducer() {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        {state.count}
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>)
}
export default UseReducer;