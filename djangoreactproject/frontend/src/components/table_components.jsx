import React from "react";


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

function TableRow(props) {
if ('group' in props.obj) {
    const {pk, username, group} = props.obj
    console.log(props.obj)
    return (<>
            <td>{pk}</td>
            <td>{username}</td>
            <td>{group}</td>
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

export {TableThead, TableRow}