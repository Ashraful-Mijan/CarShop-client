import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">CharShop</Link>
                    <span className="mx-auto text-primary" >{user.name}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto fw-bold">
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/orders">Orders</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            <Link className="nav-link" to="/deals">Deals</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;