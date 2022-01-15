import { Form } from "react-bootstrap";
import React from "react";
import { useObjects } from "./utils";
import Loader from "react-loader-spinner";

function CreateSelect(props) {
  const { data, isLoading } = useObjects("groups");
  return (
    <>
      <Form.Label>Select group</Form.Label>
      {isLoading ? (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      ) : (
        <Form.Select required onChange={props.handler} value={props.value}>
          <option value="">Select group</option>
          {data.map((obj) => (
            <option key={obj["pk"]} value={obj.name}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
      )}
    </>
  );
}

function CreateInput(props) {
  return (
    <>
      <Form.Label>Description</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Description"
        onChange={props.handler}
        value={props.value}
      />
    </>
  );
}

export default function MutableField(props) {
  const { handler, value } = props;
  return props.field.name === "group" ? (
    <CreateSelect handler={handler} value={value} />
  ) : (
    <CreateInput handler={handler} value={value} />
  );
}
