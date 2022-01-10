import React from 'react'
import {Button} from "react-bootstrap";

import {TableThead, TableRow, LoaderSpinner} from "../components/table_components";

import DefaultModalCreate from "../components/DefaultModalCreate";
import ModalUpdate from "../components/ModalUpdate";

import {deleteObject, useObjects} from "../components/api_services";

export default function DefaultTable(props) {

    const {data, isLoading, mutate} = useObjects(props.table_name)


    async function handleDelete(pk) {
        const path_part = `/${props.table_name}/${pk}`
        try {
        await deleteObject(pk, path_part)
        await mutate()
            } catch (error){
            console.error(error)
        }
    }



    return (
        <div className="users--list">
            <DefaultModalCreate table_name={props.table_name}/>
            <table className="table table-hover">
                <thead key="thead" className="thead-dark">
                <TableThead table_name={props.table_name}/>
                </thead>
                <tbody>
                {
                    (isLoading) ?
                        <LoaderSpinner/>
                        :
                        data.map(obj =>
                            <tr key={obj.pk}>
                                < TableRow obj={obj}
                                />
                                <td>
                                    <ModalUpdate obj={obj}/>

                                    <Button variant="outline-danger"
                                            onClick={() => handleDelete(obj.pk)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>

    )

}
