import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../layout/NavComp';
import FooterComp from '../layout/FooterComp';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const MainDashboardComp = () => {
    // const nav = useNavigate();
    // const handleSignOut = () => {
    //     sessionStorage.removeItem("user");
    //     window.confirm("Are you sure you want to sign out?")
    //     nav('/');
        
    // }
    return (
        <div>
            {/* <h2>This is Main MainDashboardComp</h2> */}



            <div className='container'>
                <div className='card border-primary mt-3'>
                    <div className='card-header border-primary'>
                        <NavComp></NavComp>
                        {/* <Button variant='primary' onClick={()=>handleSignOut()}>Sign Out</Button> */}
                    </div>
                    <div className='card-body border-primary'>
                        <Outlet/>
                    </div>
                    <div className='card-footer border-primary'>
                        <FooterComp></FooterComp>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardComp
