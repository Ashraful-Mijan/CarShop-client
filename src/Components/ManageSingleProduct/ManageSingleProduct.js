import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
const ManageSingleProduct = ({ managepd }) => {
    
    const { name, price, wight, _id} = managepd;
    


    const deleteProduct = (id, e) => {
        fetch(`https://immense-ravine-02946.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.parentNode.remove()
                }
            })
        
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{wight}</td>
            <td>${price}</td>
            <td><button onClick={(e)=> deleteProduct(_id,e)} className="bg-light border-0 text-danger">Delete</button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;