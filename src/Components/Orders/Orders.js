import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const [user, setUser] = useContext(UserContext)
    
    const [ordered, setOrdered] = useState([])
    
    console.log(ordered)
    useEffect(() => {
        fetch(`http://localhost:9000/getOrder/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrdered(data))
    }, [user.email])
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       ordered.map(order => <OrderedProduct key={order._id} order={order} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;