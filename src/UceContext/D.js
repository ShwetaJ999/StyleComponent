import react, { useContext } from 'react'

import { FirstName, LastName } from './A';

function D(props) {
    const firstname = useContext(FirstName)
    const lastname = useContext(LastName)

    return (<>
        {firstname}
        {lastname}
    </>)
}
export default D;