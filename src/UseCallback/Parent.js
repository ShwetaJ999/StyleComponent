import React, { useCallback, useState } from 'react'
import Child from './Child';
function Parent() {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)
    const getItems = useCallback((num) => {
        console.log(counttwo + num, counttwo - num)
        for (let i = 0; i < 1000000000; i++) { }
        console.log("getItems")
        return [counttwo + 1, counttwo - 1]
    }, [counttwo])
    return (<>
        <button onClick={() => setCountone(countone + 1)}>Count One:{countone}</button>
        <button onClick={() => setCounttwo(counttwo + 1)}>Count Two:{counttwo}</button>
        <Child getItems={getItems} />
    </>)
}
export default Parent;