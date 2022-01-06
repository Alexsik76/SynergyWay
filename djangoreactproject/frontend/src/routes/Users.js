import React, {useEffect, useState} from 'react'
import TableRow from '../components/TableRow'
import axios from "axios";
// import {Link} from "react-router-dom";
// import ButtonDelete from "../components/ButtonDelete";
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";

export default function UsersList() {
    const [users, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData()
        setIsLoading(false)
        },[]);


    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8000/api/users')
            const data = await response.data
            setData(data)

        } catch (error) {
            console.error(error);
        }
    }

    async function deleteUser(pk) {
        try {
            await axios.delete(`http://localhost:8000/api/users/${pk}/`)
            setData(prevData => prevData.filter((obj)=>{ return obj.pk !== pk})
            )
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="users--list">
                <table className="table table-hover">
                    <thead key="thead" className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Group</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(isLoading || !Array.isArray(users) || users.length === 0) ?
                        <tr>
                            <td colSpan="4" align="center">
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                            </td>
                        </tr>:
                        users.map(c =>
                        <tr key={c.pk}>
                            < TableRow user={c}
                            />
                            <td>
                                {/* <Link to={`/users/${c.pk}`} className="btn btn-outline-success"> */}
                                {/*    Update */}
                                {/* </Link> */}
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => {deleteUser(c.pk)}}>
                                    Delete user
                                </Button>

                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>

        </div>

    )

}