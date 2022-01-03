import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserCreateUpdate from "./components/UserCreateUpdate";
import Home from "./components/Home";
export default function App(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Synergy React Demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/users/" className="nav-item nav-link">Users</Link>
                        <Link to="/users/create/" className="nav-item nav-link">Create User</Link>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center">
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/users/" element={<UsersList/>}/>
                    <Route path="/users/create/" element={<UserCreateUpdate/>}/>
                </Routes>
            </div>
        </div>
  )
};