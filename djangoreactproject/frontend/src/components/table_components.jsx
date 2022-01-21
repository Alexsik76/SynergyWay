import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import MutableModal from "./MutableModal";
import { deleteObject } from "./utils";
import Loader from "react-loader-spinner";

function getFieldsNames(table_name) {
  return table_name === "users"
    ? ["pk", "username", "created", "group"]
    : ["pk", "name", "description"];
}

function TableThead(props) {
  let fields = getFieldsNames(props.table_name);
  return (
    <tr>
      {fields.map((field) => (
        <td key={field}>{field}</td>
      ))}
      <td>Action</td>
    </tr>
  );
}

function TableRow(props) {
  const all_fields = getFieldsNames(props.table_name);
  return (
    <>
      {all_fields.map((field_name) => (
        <td key={"td" + props.obj[field_name]}>{props.obj[field_name]}</td>
      ))}
      <td>
        <RowActions props={props} />
      </td>
    </>
  );
}

function RowActions(props) {
  const { table_name, obj, mutate, errorSetter, fields } = props.props;

  async function handleDelete() {
    try {
      await deleteObject(obj["pk"], `/${table_name}/${obj["pk"]}`);
      await mutate();
    } catch (error) {
      errorSetter(error.response.data);
    }
  }
  return (
    <>
      <MutableModal
        table_name={table_name}
        action={"update"}
        obj={obj}
        mutate={mutate}
        fields={fields}
      />{" "}
      <Button variant="outline-danger" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
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

function MySpinner(props) {
  let colsCount = props.table_name === "users" ? 5 : 4;
  return (
    <tr>
      <td colSpan={colsCount} align="center">
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      </td>
    </tr>
  );
}

export { AlertDismissibleError, TableThead, MySpinner, TableRow };
