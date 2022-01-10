import React from "react";
import Loader from "react-loader-spinner";

function TableThead(props) {
    switch (props.table_name) {
        case 'users': {
            return (
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
            )
        }
        case 'groups': {
            return (
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            )
        }
    }
}

function LoaderSpinner() {
    return (
        <tr>
            <td colSpan="4" align="center">
                <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
            </td>
        </tr>
    )
}


function TableRow(props) {
if ('group' in props.obj) {
    const {pk, username, group} = props.obj
    console.log(props.obj)
    return (<>
            <td>{pk}</td>
            <td>{username}</td>
            <td>{group.name}</td>
        </>
    )
} else {
    const {pk, name, description} = props.obj
    return (<>
            <td>{pk} </td>
            <td>{name}</td>
            <td>{description}</td>
        </>
    )
}
}




export {TableThead,LoaderSpinner, TableRow}