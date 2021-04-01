import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams()
    const [checkData, setCheckData] = useState({})
    const [user, setUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:9000/checkouts/${id}`)
            .then(res => res.json())
            .then(data => {
                setCheckData(...data)
            })
    }, [id])

    const handleOrders = ()=> {
        const newUser = {email: user.email, name: checkData.name, price: checkData.price, date: new Date() }


        fetch('http://localhost:9000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
           body:JSON.stringify(newUser)
        })

        console.log(newUser)
    }
    return (
        <div className='container my-4'>
            <h2 className="display-6 mb-4">Checkout</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{checkData.name}</td>
                        <td>1</td>
                        <td>${checkData.price}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Total</td>
                        <td></td>
                        <td></td>
                        <td className="fw-bold">${checkData.price}</td>
                    </tr>
                </tbody>
            </table>
            {/* <Link to="/orders" className='btn btn-success me-auto'>Checkout</Link> */}
            <button className='btn btn-success me-auto' onClick={handleOrders}>Checkout</button>
        </div>
    );
};

export default Checkout;