import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            {/* <h2>This is NavComp</h2> */}
            <Link to="images" className='btn btn-primary btn-sm'>Img</Link>{" "}
            <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
            <Link to="event" className='btn btn-primary btn-sm'>Event</Link>{" "}
            <Link to="form" className='btn btn-primary btn-sm'>Form</Link>{" "}
            <Link to="reacthooks" className='btn btn-primary btn-sm'>Hooks</Link>
            
        </div>
    )
}

export default NavComp
