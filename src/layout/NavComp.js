import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';



const NavComp = () => {
     const nav = useNavigate();
        const handleSignOut = () => {
            if(window.confirm("Are you sure you want to sign out?")){
                sessionStorage.removeItem("user");
                nav('/');


            }
        }
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
            <Link to="datalist" className='btn btn-warning btn-sm'>DataList</Link>
            <Button variant='outline' oclor='danger' onClick={()=>handleSignOut()} className='float-end'>
                <LogoutIcon></LogoutIcon> SignOut</Button>
            
        </div>
    )
}

export default NavComp
