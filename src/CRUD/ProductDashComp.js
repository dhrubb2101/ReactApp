import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductDashComp = () => {

    const [products,setProduct] =  useState([])


useEffect(()=>{
    fetchData();
},[])

const fetchData = () =>{
    axios.get(`http://localhost:8888/products`).then((res)=>{
        console.log(res.data);
        setProduct(res.data);
    }).catch((error)=>{
        console.error('Error fetching data:', error);
    })
}


    return (
        <div>
            <h2>This is ProductDashComp</h2>
            <table>
                <thead>
                    <tr>
                        <th>SrNo.</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ProductDashComp
