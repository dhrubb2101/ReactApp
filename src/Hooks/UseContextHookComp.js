import React, { createContext } from 'react'
import CompOne from './CompOne';
import { useState } from 'react';

export const UserContext = createContext();

const UseContextHookComp = () => {

    const [myName,setMyName] = useState("Dhrubb Gupta");
    return (
        <div>
            <UserContext.Provider value={myName}>
            <h2>THis is UseContext hook component</h2>
            <p>My name is : <strong>{myName}</strong></p>
            <hr/>
            <CompOne name={myName}></CompOne>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextHookComp
