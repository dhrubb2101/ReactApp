import React, { useContext } from 'react'
import { UserContext } from './UseContextHookComp'

const CompThree = () => {

    let user = useContext(UserContext)
    return (
        <div>
           <h2>This is Component three</h2> 
           <p>My Name is : <strong>{user}</strong></p>

        </div>
    )
}

export default CompThree
