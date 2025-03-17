import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';





const ProductDashComp = () => {
    
    const [products,setProduct] =  useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setShow(val);
    }


useEffect(()=>{
    fetchData();
},[])


//get request
const fetchData = () =>{
    axios.get(`http://localhost:8888/products`).then((res)=>{
        console.log(res.data);
        setProduct(res.data);
    }).catch((error)=>{
        console.error('Error fetching data:', error);
    })
}

//code for delete request
const deleteRecord = (id) => {
    if(window.confirm(`Are you sure you want to delete this record with this particular ID ${id}`)){
        axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("Record Deleted succesfully")
            fetchData()
        }).catch((error)=>{})
    }
}


    return (
        <div>
            <h2>This is ProductDashComp</h2>
            <Link to="/maindashboard/productadd" className='btn btn-primary mb-3'><AddIcon></AddIcon>Add</Link>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>SrNo.</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length >0 && products.map((val,index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>
                                <button type="button" onClick={()=>handleShow(val)} className='btn btn-outline-primary btn-sm'><VisibilityIcon></VisibilityIcon></button> {" "}

                                    <Link to={`/maindashboard/productedit/${val.id}`} type="button" className='btn btn-outline-success btn-sm'>
                                        <EditIcon></EditIcon>
                                    </Link>{" "} 
                                    <button type="button" className='btn btn-outline-danger btn-sm' onClick={()=>deleteRecord(val.id)}><DeleteIcon></DeleteIcon></button> 
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
             {/* //modal codes start here */}
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{show.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product ID : <strong>{show.id}</strong></p>
          <p>Product Name : <strong>{show.name}</strong></p>
          <p>Product Price : <strong>{show.price}</strong></p>
          <p>Product Company : <strong>{show.company}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ProductDashComp
