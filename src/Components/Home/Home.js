import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';

const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://immense-ravine-02946.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {
                        product.map(pd => <Product key={pd._id} product={pd} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;