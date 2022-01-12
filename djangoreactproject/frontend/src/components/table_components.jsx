import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function TableThead(props) {
  switch (props.table_name) {
    case "users": {
      return (
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Group</th>
          <th>Actions</th>
        </tr>
      );
    }
    case "groups": {
      return (
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      );
    }
  }
}

function TableRow(props) {
  if ("group" in props.obj) {
    const { pk, username, group } = props.obj;
    return (
      <>
        <td>{pk}</td>
        <td>{username}</td>
        <td>{group}</td>
      </>
    );
  } else {
    const { pk, name, description } = props.obj;
    return (
      <>
        <td>{pk} </td>
        <td>{name}</td>
        <td>{description}</td>
      </>
    );
  }
}

function AlertDismissibleError(props) {
  const [show, setShow] = useState(!!props.errorText);

  return (
    <>
      {show && (
        <Alert
          variant="danger"
          onClose={() => {
            setShow(false);
            props.setter("");
          }}
          dismissible
        >
          <Alert.Heading>Server error!</Alert.Heading>
          <p>{props.errorText}</p>
        </Alert>
      )}
    </>
  );
}

export { TableThead, TableRow, AlertDismissibleError };
