import React from 'react'
import Navbar from "./components/Navbar";
import {Route, Routes, Outlet} from "react-router-dom";
import UsersList from "./components/UsersList";
import UserCreateUpdate from "./components/UserCreateUpdate";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutsWithNavbar/>}>
                <Route path="/" element={<div>Home screen</div>}/>
                <Route path="/users/" element={<UsersList/>}/>
                <Route path="/users/create/" element={<UserCreateUpdate/>}/>
            </Route>
        </Routes>
    );
};

function LayoutsWithNavbar() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row justify-content-center">
                </div>
                <Outlet/>
            </div>
        </>
    );
}