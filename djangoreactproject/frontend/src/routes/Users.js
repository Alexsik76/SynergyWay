import React, {useEffect, useReducer, useState} from 'react'
import TableRow from '../components/TableRow'
import {usersReducer, getUsers, updateUser,deleteUser, init} from "../components/reducer";
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";
import ModalUpdate from "../components/ModalUpdate";



export default function UsersList(initialData=[]) {

    const [users, usersDispatch] = useReducer(usersReducer, initialData, init);
    const [isLoading, setIsLoading] = useState(false)
    const userSave = (newUser) => {
        console.log(newUser)
        updateUser(usersDispatch, newUser)

    }

    useEffect(() => {
        setIsLoading(true)
        getUsers(usersDispatch)
        console.log('updated')
        setIsLoading(false)
    }, []);

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
                            <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
                        </td>
                    </tr> :
                    users.map(c =>
                        <tr key={c.pk}>
                            < TableRow user={c}
                            />
                            <td>
                                <ModalUpdate user={c} userSave={userSave}/>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => {
                                    deleteUser(usersDispatch, c.pk)
                                }
                                }
                                >
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