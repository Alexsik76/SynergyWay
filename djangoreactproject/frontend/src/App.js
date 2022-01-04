import React from 'react'
import Navbar from "./components/Navbar";
import {Route, Routes, Outlet} from "react-router-dom";
import UsersList from "./components/UsersList";
import UserCreateUpdate from "./components/UserCreateUpdate";
import UpdateForm from "./components/UpdateForm";
// import UserUpdate from "./components/UserUpdate";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutsWithNavbar />}>
                <Route path="/index" element={<div>Home screen</div>}/>
                <Route path="users" element={<UsersList />}/>
                <Route path="users/:userId" element={<UpdateForm />} />
                <Route path="users/create" element={<UserCreateUpdate />}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
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
                    {<Outlet/>}
                </div>
            </div>
        </>
    );
}