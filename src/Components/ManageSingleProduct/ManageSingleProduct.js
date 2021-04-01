import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
const ManageSingleProduct = ({ managepd }) => {
    
    const { name, price, wight, _id} = managepd;
    

    // function deleteProduct(event, id) {

    // }

    const deleteProduct = (id) => {
        fetch(`http://localhost:9000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully');
                if (result) {
                    // console.log(event.target.parentNode.remove)
                    // event.target.parentNode.remove()
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{wight}</td>
            <td>${price}</td>
            <td><button onClick={()=> deleteProduct(_id)} className="bg-light border-0 text-danger"><RiDeleteBin5Fill /></button></td>

        </tr>
    );
};

export default ManageSingleProduct;