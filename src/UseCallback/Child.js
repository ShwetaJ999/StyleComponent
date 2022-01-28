import React, { useEffect, useState } from "react";
function Child({ getItems }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems(3))
    }, [getItems])
    return (<>
        {items && items.map(item => {
            return <div key={item}>{item}</div>
        })}
    </>)
}
export default Child;