import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        // <React.Fragment className="txt">
        //    it removes unnecessary elemets like various div elements used in Code./Use it instead of div and put the entire code in it.
        // </React.Fragment>
        <div>
            {/* <h2>This is NavComp</h2> */}
            <Link to="images" className='btn btn-primary btn-sm'>Img</Link>{" "}
            <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
            <Link to="event" className='btn btn-primary btn-sm'>Event</Link>{" "}
            <Link to="form" className='btn btn-primary btn-sm'>Form</Link>{" "}
            <Link to="reacthooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
            <Link to="productdash" className='btn btn-warning btn-sm'>CRUD</Link>
            
        </div>
    )
}

export default NavComp
