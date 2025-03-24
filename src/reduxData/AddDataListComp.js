import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { createData } from '../features/API/ApiSlice'

const AddDataListComp = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()
    const [products,setProducts]  = useState({
        name:'',
        price:'',
        company:''
    })

    const inputChangeHandler = (event) => {
        setProducts({...products,[event.target.name]:event.target.value})

    }

    const addProduct = (event) => {
        event.preventDefault();
        dispatch(createData(products))
        nav("/maindashboard/datalist")
     

    }

    return (
        <div>
            <h2>This is AddDataList component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>

                <form onSubmit={addProduct}>
                <input type='text' name='name' onChange={inputChangeHandler}  value={products.name} className='form-control' placeholder='Enter Product Name' ></input> <br/>
                <input type='text' name='price' onChange={inputChangeHandler}  value={products.price} className='form-control' placeholder='Enter Product Price' ></input> <br/>
                <input type='text' name='company' onChange={inputChangeHandler}  value={products.company} className='form-control' placeholder='Enter Product Company' ></input> <br/>
                <button type='submit' className='btn btn-primary mt-2'>Add Product</button>
                </form>

            </div>
            <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default AddDataListComp
