import React, { useEffect } from 'react'
import { useNavigate, Outlet} from 'react-router-dom';

const ProtectedRouteComp = ({Component}) => {

    const nav = useNavigate();
    // const {Component} = props;

    useEffect(() => {
        if(!sessionStorage.getItem("user")){
            nav('/');
        }
    },[])

    return (
        <div>
            {/* <h2>This is the Protected Routing component</h2> */}
            <Component></Component>
            {/* <Outlet/> */}
        </div>
    )
}



export default ProtectedRouteComp


