import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <NavLink className="navbar-brand" to='/'>
                <h2>BLOG APP</h2>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Link to="/register">
                        <button className="btn btn-success mr-3 mb-1">Register</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-success ml-2">login</button>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Header;