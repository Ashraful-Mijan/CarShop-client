import React from 'react';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* <Link className="navbar-brand" to="/">CharShop</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto fw-bold">
                            <Link className="nav-link" to="/manage">Manage Product</Link>
                            <Link className="nav-link" to="/addproducts">Add Product</Link>
                            <Link className="nav-link" to="/editproduct">Edit Product</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavAdmin;