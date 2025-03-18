import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom'
const ProductEditComp = () => {



    const {id} = useParams()
    const nav = useNavigate()

    const [products,setProducts]  = useState({
            id:'',
            name:'',
            price:'',
            company:''
        })

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            // console.log(res.data);
            setProducts(res.data)
    }).catch((error)=>{

    })},[]);

    const inputChangeHandler = (event) => {
        setProducts({...products,[event.target.name]:event.target.value})

    
}

 const addProduct = (event) => {
        event.preventDefault();
        console.log(products);
        axios.put(`http://localhost:8888/products/${id}`,products).then(()=>{
            window.alert("Product Updated Successfully")
            nav("/maindashboard/productdash")
        }).catch((error)=>{})

    }


    return (
        <><div>
            <h2>This is ProductEditComp component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>

                <form onSubmit={addProduct}>
                <input type='text' name='name' onChange={inputChangeHandler}  value={products.name} className='form-control' placeholder='Enter Product Name' ></input> <br/>
                <input type='text' name='price' onChange={inputChangeHandler}  value={products.price} className='form-control' placeholder='Enter Product Price' ></input> <br/>
                <input type='text' name='company' onChange={inputChangeHandler}  value={products.company} className='form-control' placeholder='Enter Product Company' ></input> <br/>
                <button type='submit' className='btn btn-primary mt-2'>Update Product</button>
                </form>

            </div>
            <div className='col-sm-3'></div>
            </div>
        </div><Outlet /></>
    )
}

export default ProductEditComp
