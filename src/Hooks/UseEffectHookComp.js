import React, { useEffect,useState,seEffect } from 'react'
import { Button } from 'react-bootstrap';

const UseEffectHookComp = () => {
    const [myName,setMyName] = useState("");
    const [count,setCount] =useState(0);
    const [salary,setSalary] =useState(5500);

    // useEffect(()=>{
    //     setCount(count+1)
    // },[])
    useEffect(()=>{
        setCount(count+1)
    },[salary])

    return (
        <div>
            <h2> This is UseEffect Hook component.</h2>
            <p>My Name is: <strong>{myName}</strong></p>
            <p>Count value is: <strong>{count}</strong></p>
            <p>My Salary is: <strong>{salary}</strong></p>
            <Button variant ="primary" onClick={()=>setSalary(salary+5000)}>Salary</Button>

        </div>
    )
}

export default UseEffectHookComp
