import React, { useEffect, useState } from "react";
import axios from 'axios'
function UseEffect() {
    const [content, setContent] = useState("hello")
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log("componentDidMount")
    }, [])
    useEffect(() => {
        console.log("componentDidUpdate")
        return () => {
            console.log("Unmount")
        }
    }, [content])

    return (<>
        <button onClick={() => setCount(count + 1)}> Count {count} </button>
        <button onClick={() => setContent('posts')}> Posts </button>
        <button onClick={() => setContent('users')}> Users </button>
        <button onClick={() => setContent('comments')}> Comments </button>
        <h1>{content}</h1> 
    </>)
}
export default UseEffect;