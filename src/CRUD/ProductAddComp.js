import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ProductAddComp = () => {

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
        console.log(products);
        axios.post('http://localhost:8888/products',products).then(()=>{
            window.alert("Product Added Successfully")
            nav("/maindashboard/productdash")
        }).catch((error)=>{})

    }



    return (
        <div>
            <h2>This is ProductAddComp</h2>
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
            <Outlet/>
        </div>
    )
}

export default ProductAddComp
