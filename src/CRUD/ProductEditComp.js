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

    return (
        <><div>
            <h2>This is ProductEditComp component</h2>
        </div><Outlet /></>
    )
}

export default ProductEditComp
