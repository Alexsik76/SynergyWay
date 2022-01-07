import React from "react";

function TableRow(user) {
    const {pk, username, groups} = user.user
    return (<>
            <td>{pk} </td>
            <td>{username}</td>
            <td>{groups}</td>
        </>
    )
}

export default TableRow