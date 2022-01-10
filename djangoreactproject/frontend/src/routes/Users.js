import React from 'react'
import UserTableRow from '../components/UserTableRow'
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";

import ModalCreate from "../components/ModalCreate";
import ModalUpdate from "../components/ModalUpdate";

import {useUsers, deleteObject} from "../components/api_services";

export default function UsersList() {
    const {data, isLoading, mutate} = useUsers()

    async function handleDelete(pk) {
        const path_part = `/users/${pk}`
        await deleteObject(pk, path_part)
        await mutate()
    }

    return (
        <div className="users--list">
            <ModalCreate/>
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
                {
                    (isLoading) ?
                        <tr>
                            <td colSpan="4" align="center">
                                <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
                            </td>
                        </tr>
                        :
                        data.map(obj =>
                            <tr key={obj.pk}>
                                < UserTableRow obj={obj}
                                />
                                <td>
                                    <ModalUpdate obj={obj}/>
                                </td>
                                <td>
                                    <Button variant="outline-danger"
                                            onClick={()=>handleDelete(obj.pk)}
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
