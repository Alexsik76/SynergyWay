import React, {useState} from 'react'
import {Button} from "react-bootstrap";

import {TableThead, TableRow, AlertDismissibleError} from "../components/table_components";

import DefaultModalCreate from "../components/DefaultModalCreate";
import ModalUpdate from "../components/ModalUpdate";

import {deleteObject, useObjects} from "../components/api_services";
import Loader from "react-loader-spinner";


export default function DefaultTable(props) {

    const [tableError, setError] = useState(null)

    const {data, isLoading, mutate} = useObjects(props.table_name)


    async function handleDelete(pk) {
        const path_part = `/${props.table_name}/${pk}`
         try {
             await deleteObject(pk, path_part)
             await mutate()
         } catch (error) {
            setError(error.response.data)
         }
    }

    return (
        <div className="users--list">
            {tableError && <AlertDismissibleError errorText={tableError} setter={setError}/>}
            <DefaultModalCreate table_name={props.table_name}/>
            <table className="table table-hover">
                <thead key="thead" className="thead-dark">
                <TableThead table_name={props.table_name}/>
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
                            <tr key={obj["pk"]}>
                                < TableRow obj={obj}
                                />
                                <td>
                                    <ModalUpdate obj={obj}/>{' '}

                                    <Button variant="outline-danger"
                                            onClick={() => handleDelete(obj["pk"])}
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
