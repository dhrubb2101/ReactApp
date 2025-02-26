



// arrow function component boiler plate (type rafce)
const ChildComp = (props) => {
    return (
        <div>
            {console.log("child component render")}

            <h2>This is Child Component</h2>
            <p>Employee Name is: {props.name} </p>
            <p>Employee Salary is: {props.salary} </p>
            <h2 onMouseOver={props.eventData}>Hover over me</h2>
        </div>
    )
}

export default ChildComp


// import React from 'react'

// export default function ChildComp() {
//     return (
//         <div>
//             <h2>This is the child component</h2>
//         </div>
//     )
// }
