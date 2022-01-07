import React, {useEffect, useReducer, useState} from 'react'
import TableRow from '../components/TableRow'
import {usersReducer, getUsers, createUser, updateUser, deleteUser, init} from "../components/reducer";
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";
import ModalUpdate from "../components/ModalUpdate";
import ModalCreate from "../components/ModalCreate";



export default function UsersList(initialData=[]) {

    const [users, usersDispatch] = useReducer(usersReducer, initialData, init);
    const [isLoading, setIsLoading] = useState(false)

    const createFn = (new_user) => {
        createUser(usersDispatch, new_user)
    }
    const updateFn = (new_user) => {
        updateUser(usersDispatch, new_user)
    }

    useEffect(() => {
        setIsLoading(true)
        getUsers(usersDispatch)
        setIsLoading(false)
    }, [users.length]);

    return (

        <div className="users--list">
        <ModalCreate userCreate={createFn}/>
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
                                <ModalUpdate user={c} userUpdate={updateFn}/>
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