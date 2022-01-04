import React from "react";

function TableRow({user}) {
    return (<>
            <td>{user.pk} </td>
            <td>{user.username}</td>
            <td>{user.groups}</td>
        </>
    )
}

export default TableRow