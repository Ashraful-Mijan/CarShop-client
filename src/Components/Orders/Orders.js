import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const [user, setUser] = useContext(UserContext)
    
    const [ordered, setOrdered] = useState([])

    useEffect(() => {
        fetch(`https://immense-ravine-02946.herokuapp.com/getOrder/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrdered(data))
    }, [user.email])
    return (
        <div className="container mt-4">
            <h3 className="text-success">Your Orders</h3>
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