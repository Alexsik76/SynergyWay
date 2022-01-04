import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Synergy React Demo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/users" className="nav-item nav-link">Users</Link>
                <Link to="/users/create " className="nav-item nav-link">Create User</Link>
            </div>
        </div>
        </div>
    </nav>
}
export default Navbar
