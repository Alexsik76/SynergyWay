import React from "react";

function UserTableRow(user) {
    const {pk, username, groups} = user.user
    return (<>
            <td>{pk} </td>
            <td>{username}</td>
            <td>{groups}</td>
        </>
    )
}

export default UserTableRow