import {Form} from "react-bootstrap";
import React from "react";
import {useObjects} from "./api_services";
import Loader from "react-loader-spinner";


export default function AltField(props) {
    const {data, isLoading} = useObjects('groups')

    if (props.table_name === 'users') {
        return (
            (isLoading) ?
                <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
                :
                <Form.Select aria-label="Select group name" onChange={props.handler}>
                    {
                        data.map(obj =>
                            <option key={obj.pk} value={obj.name}>{obj.name}</option>
                        )
                    }
                </Form.Select>
        )
    } else {
        return (
            <>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" onChange={props.handler}/>

            </>

        )
    }

}