import { Form } from "react-bootstrap";
import React from "react";
import { useObjects } from "./utils";
import Loader from "react-loader-spinner";

export default function MutableField(props) {
  const { data, isLoading } = useObjects("groups");
  if (props.table_name === "users") {
    return isLoading ? (
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    ) : (
      <Form.Select
        aria-label="Select group name"
        onChange={props.handler}
        value={props.value}
      >
        <option>Select group</option>
        {data.map((obj) => (
          <option key={obj["pk"]} value={obj.name}>
            {obj.name}
          </option>
        ))}
      </Form.Select>
    );
  } else {
    return (
      <>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={props.handler}
          value={props.value}
        />
      </>
    );
  }
}
