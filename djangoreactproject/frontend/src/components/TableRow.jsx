import React from "react";
import { RowActions } from "./table_components";

export default function TableRow(props) {
  const all_fields =
    props.table_name === "users"
      ? ["pk", "username", "created", "group"]
      : ["pk", "name", "description"];

  return (
    <>
      <td>key={props.obj["pk"]}</td>
      {all_fields.map((field_name) => (
        <td>{props.obj[field_name]}</td>
      ))}
      <RowActions props={props} />
    </>
  );
}
