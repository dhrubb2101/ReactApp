import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchData } from '../features/API/ApiSlice'
import { Button } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData } from '../features/API/ApiSlice'
import { Link } from 'react-router-dom'


const DataListComp = () => {
    //we cannot use hooks directly so we create instances of it,
    //we use these instances to access the data
    //we use useDispatch to call the Actions
    const dispatch = useDispatch();
    //we use useSelector to get the data from the store and display it
    const data = useSelector((state)=>state.api.data)
    const status = useSelector((state)=>state.api.status)
    const error = useSelector((state)=>state.api.error)
    //now unless you make any action the data won;t come into you rstate in store
    //so we use useEffect to call the fetchData action as soon as the component is loaded
    //we use status to check if the data is loaded or not
    //if the status is idle then we call the fetchData action
    //we use dispatch to call the action
    
    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchData());
        }
    },[status,dispatch])
    //we use deleteRecord to delete the record
    const deleteRecord = (id) => {
        dispatch(deleteData(id));
    }

    let content;
    if(status === "loading"){
        content = "<div>Loading...</div>"
    }
    else if(status === "succeeded"){
        content = (
            <table className='table table-hover table-striped'>
                <thead>
                    <tr className='table-dark'>
                        <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { data.length>0 && data.map((val,index)=>{
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <Button variant='outline' size="sm" onClick={()=>deleteRecord(val.id)}>
                                    <DeleteIcon></DeleteIcon></Button>
                            </td>
                            </tr>
                    })
                }
                </tbody>
            </table>
        )
    }
    return (
        <div>
            <h2>This is DataListComp component</h2>
            <Link to='/maindashboard/adddatalist' className='btn btn-primary btn-sm mt-2 mb-2'>Add</Link>
            {content}
        </div>
    )
}

export default DataListComp
