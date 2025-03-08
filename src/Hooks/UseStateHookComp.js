import React, { useState } from 'react'

const UseStateHookComp = () => {
    const [myName,setMyName] = useState("Dhrubb");
    const [mySalary,setMySalary] = useState(70000000)
    const [courses,setCourses] = useState([
        {id:1,name:"Java"},
        {id:2,name:"Python"},
        {id:3,name:"Node.js"},
        {id:4,name:"Angular"},
        {id:5,name:"React"}
    ])

    const changeData = () => {
        setMyName("Dhrubb Gupta")

    }
    return (
        <div>
            <h2>This is UseState component</h2>
            <p>My Name is :<strong>{myName}</strong></p>
            <button type='button' className='btn btn-primary' onClick={()=>changeData()}>Change Name</button> {" "}
            <button type='button' className='btn btn-primary' onClick={()=>setMyName("Dhrubb Gupta")}>Change Name 2nd menthod</button>
            <p>My Name is :<strong>{mySalary}</strong></p>
            <button type='button' className='btn btn-primary' onClick={()=>setMySalary(mySalary+100000)}>Increment Salary</button>
            <ul>
                {courses.map((val,index)=>{
                    return <li key={index}>{val.name}</li>
                })}
            </ul>


        </div>
    )
}

export default UseStateHookComp
