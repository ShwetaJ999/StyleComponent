import React, { useRef } from "react";
function UseRef() {
    const inputRef = useRef()
    function handleRef() {
        console.log(inputRef)
        inputRef.current.focus()
    }
    return (<>
        <input type="text" ref={inputRef} />
        <button onClick={handleRef}>Click here</button>
    </>)
}
export default UseRef;