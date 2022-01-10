import React from 'react'
import UserTableRow from '../components/UserTableRow'
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";

import ModalCreate from "../components/ModalCreate";
import ModalUpdate from "../components/ModalUpdate";

import {useGroups, deleteObject} from "../components/api_services";
import GroupTableRow from "../components/GroupTableRow";

export default function GroupsList() {
    const {data, isLoading, mutate} = useGroups()

    async function handleDelete(pk) {
        const path_part = `/groups/${pk}`
        await deleteObject(pk, path_part)
        await mutate()
    }

    return (
        <div className="users--list">
            {/*<ModalCreate/>*/}
            <table className="table table-hover">
                <thead key="thead" className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
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
                                < GroupTableRow group={obj}
                                />
                                <td>
                                    {/*<ModalUpdate group={obj}/>*/}
                                </td>
                                <td>
                                    <Button variant="outline-danger"
                                            onClick={()=>handleDelete(obj.pk)}
                                    >
                                        Delete group
                                    </Button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>

    )

}
