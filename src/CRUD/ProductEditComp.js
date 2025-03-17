import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom'
const ProductEditComp = () => {


    const {id} = useParams()
    const nav = useNavigate()

    useEffect(()=>{

    },[])

    return (
        <><div>
            <h2>This is ProductEditComp component</h2>
        </div><Outlet /></>
    )
}

export default ProductEditComp
