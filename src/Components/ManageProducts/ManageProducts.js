import React, { useEffect, useState } from 'react';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const [manage, setManage] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/product')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])
    // console.log(manage)
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Wight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manage.map(managepd => <ManageSingleProduct key={managepd._id} managepd={managepd}  />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;