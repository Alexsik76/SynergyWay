import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import MutableField from "./MutableField";

export default function MutableForm(props) {
  const [validated, setValidated] = useState(false);
  const { field1, field2 } = props.fields;

  const [val1, setVal1] = useState(field1.get_init_value(props.obj));
  const [val2, setVal2] = useState(field2.get_init_value(props.obj));
  const handleVal1 = (event) => {
    setVal1(event.target.value);
  };
  const handleVal2 = (event) => {
    setVal2(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    props.handleForm(val1, val2);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId={"form" + field1.name + 1}>
        <Form.Label>{field1.name}</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder={field1.name}
          onChange={handleVal1}
          value={val1}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={"form" + field2.name + 2}>
        <MutableField
          handler={handleVal2}
          value={val2}
          field={props.fields.field2}
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
