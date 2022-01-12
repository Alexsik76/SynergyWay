import { Form } from "react-bootstrap";
import React from "react";
import MutableField from "./MutableField";

export default function MutableForm(props) {
  const field_name = props.table_name === "users" ? "Username" : "Group name";
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formUpdateUsername">
        <Form.Label>{field_name}</Form.Label>
        <Form.Control
          type="text"
          placeholder={field_name}
          onChange={props.handleVal1}
          value={props.val1}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUpdateGroup">
        <MutableField
          table_name={props.table_name}
          handler={props.handleVal2}
          value={props.val2}
          // defaultValue={props.val2}
        />
      </Form.Group>
    </Form>
  );
}
