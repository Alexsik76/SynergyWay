import React, {useEffect, useState} from 'react'
import TableRow from '../components/TableRow'
import axios from "axios";
// import {Link} from "react-router-dom";
// import ButtonDelete from "../components/ButtonDelete";
import Loader from "react-loader-spinner";

export default function UsersList() {
    const [users, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(fetchData, 2000)
        setIsLoading(false)
        },[]);


    async function fetchData() {
        try {
            let response = await axios.get('http://localhost:8000/api/users')
            response = await response.data
            setData(response)

        } catch (error) {
            console.error(error);
        }
    }

    async function deleteUser(pk) {
        try {
            await axios.delete(`http://localhost:8000/api/users/${pk}/`)
            setData(users.filter((obj)=>{ return obj.pk !== pk})
            )
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="users--list">
            {(isLoading || users.length === 0) ?
                <Loader type="Bars" color="#00BFFF" height={80} width={80} /> :
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
                    {users.map(c =>
                        <tr key={c.pk}>
                            < TableRow user={c}
                            />
                            <td>
                                {/* <Link to={`/users/${c.pk}`} className="btn btn-outline-success"> */}
                                {/*    Update */}
                                {/* </Link> */}
                            </td>
                            <td>
                                <button onClick={() => {
                                    deleteUser(c.pk)
                                }
                                }
                                >
                                    Delete user
                                </button>
                                {/* <ButtonDelete pk={c.pk} */}
                                {/*              onUsersClick={this.onUsersClick} */}
                                {/*              service={usersServices} */}
                                {/* /> */}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            }
        </div>

    )

}