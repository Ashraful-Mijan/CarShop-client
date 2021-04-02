import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {imageURL, price, wight, name, _id} = product;
    return (
        <div className="col-md-4 my-2">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">$ {price}</p>
                    <Link to={`/checkouts/${_id}`} className="btn btn-warning">Buy</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;