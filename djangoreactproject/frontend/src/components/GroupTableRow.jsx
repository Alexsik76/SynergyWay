import React from "react";

function TableRow(group) {
    const {pk, name, description} = group.group
    return (<>
            <td>{pk} </td>
            <td>{name}</td>
            <td>{description}</td>
        </>
    )
}

export default TableRow