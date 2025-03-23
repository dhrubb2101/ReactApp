import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const ReactHooksComp = () => {
    return (
        <div>
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                <Link to="usestate" className='btn btn-outline-info btn-sm'>UseState</Link>{" "}
                <Link to="useeffect" className='btn btn-outline-success btn-sm'>UseEffect</Link>{" "}
                <Link to="useref" className='btn btn-outline-success btn-sm'>UseRef</Link>{" "}
                <Link to="usecontext" className='btn btn-outline-info btn-sm'>UseContext</Link>{" "}
                </div>
                <div className='card-body border-primary'>
                <h2>This is Reack Hooks component.</h2>
                <Outlet></Outlet>


                </div>
            </div>
            

        </div>
    )
}

export default ReactHooksComp
