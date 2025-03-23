import React, { useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';

const UseRefHookComp = () => {
    const inputRef = useRef();
    const prevData = useRef('');
    const [inputData,setInputData] = useState('');

    const accessDOMNode = () => {
        inputRef.current.focus();
        window.alert(inputRef.current.value)
        // console.log(inputRef.current.value)
    }

    const inputChangeHandler = (event) =>{
        setInputData(event.target.value)
    }


    useEffect(()=>{
        prevData.current = inputData

    },[inputData])


    return (

        <div>
            <h2>This is UseRefHookComp component</h2>
            <form>
                <input type='text' name='txt1' ref = {inputRef}/> <br></br>
                <Button variant='contained' onClick={()=>accessDOMNode()}>Access DOM node</Button>
                
            </form>
            <hr/>

            <form>
                <input type='text' name='txt2' value={inputData} onChange={inputChangeHandler}/> <br></br>
                <Button variant='contained' onClick={()=>accessDOMNode()}>Access DOM node</Button>
            </form>
            <p>Old Data:<strong>{prevData.current}</strong></p>
            <p>New Data:<strong>{inputData}</strong></p>
        </div>
    )
}

export default UseRefHookComp
