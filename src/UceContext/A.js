import react, { createContext } from 'react'
import B from './B'
const FirstName = createContext()
const LastName = createContext()
function A(props) {
    return (<>

        <FirstName.Provider value="Ram">
            <LastName.Provider value="Shyam">
                <B />
            </LastName.Provider>
        </FirstName.Provider>
    </>)
}
export default A;
export { FirstName, LastName }
