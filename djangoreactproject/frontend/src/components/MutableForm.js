import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import MutableField from "./MutableField";

export default function MutableForm(props) {
  const [validated, setValidated] = useState(false);
  const [val1, setVal1] = useState(props.initValues.field1Val);
  const [val2, setVal2] = useState(props.initValues.field2Val);
  const handleVal1 = (event) => {
    setVal1(event.target.value);
  };
  const handleVal2 = (event) => {
    setVal2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    props.handleForm(val1, val2);
  };

  const field_name =
    props.initValues.table_name === "users" ? "Username" : "Group name";
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUpdateUsername">
        <Form.Label>{field_name}</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder={field_name}
          onChange={handleVal1}
          value={val1}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUpdateGroup">
        <MutableField
          table_name={props.initValues.table_name}
          handler={handleVal2}
          value={val2}
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
