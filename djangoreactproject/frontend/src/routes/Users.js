import React, {useEffect, useState} from 'react'
import TableRow from '../components/TableRow'
import axios from "axios";
// import {Link} from "react-router-dom";
// import ButtonDelete from "../components/ButtonDelete";




export default function UsersList() {
    const [users, setData] = useState([]);

    useEffect(() => {
        async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8000/api/users');

            setData(result.data);
        }
        catch (error) {
    console.error(error);
  }
    }
        fetchData();

    },[]);


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
                            {/* <ButtonDelete pk={c.pk} */}
                            {/*              onUsersClick={this.onUsersClick} */}
                            {/*              service={usersServices} */}
                            {/* /> */}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}
