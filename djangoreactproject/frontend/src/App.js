import React from 'react'
import {Route, Routes} from 'react-router-dom'

import BaseLayout from './routes/BaseLayout'
// import UsersList from './routes/Users'
// import GroupsList from "./routes/Groups";
import DefaultTable from "./routes/DefaultTable";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout/>}>
                <Route index element={<div><h3>
                    <small className="text-muted">Home screen</small>
                </h3></div>}/>
                <Route path="users" element={<DefaultTable table_name={'users'}/>}/>
                <Route path="groups" element={<DefaultTable table_name={'groups'}/>}/>
                <Route
                    path="*"
                    element={
                        <main>
                            <h2 className="text-muted">There`s nothing here!</h2>
                        </main>
                    }
                />
            </Route>
        </Routes>
    )
}
