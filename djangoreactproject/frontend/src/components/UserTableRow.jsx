import React from "react";

function UserTableRow(props) {
    console.log(props)
    const {pk, username, groups} = props.obj
    return (<>
            <td>{pk} </td>
            <td>{username}</td>
            <td>{groups}</td>
        </>
    )
}

export default UserTableRow