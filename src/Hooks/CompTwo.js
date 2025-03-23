import React from 'react'
import CompThree from './CompThree'

const CompTwo = (props) => {
    return (
        <div>
            <h3>This is This is Component Two</h3>            
            <p>My Name is : <strong>{props.name}</strong></p>
            <hr/>
            <CompThree name={props.name}></CompThree>


        </div>
    )
}

export default CompTwo
