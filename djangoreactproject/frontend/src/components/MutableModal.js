import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import MutableForm from "./MutableForm";
import { actionCreateOrUpdate } from "./utils";

export default function MutableModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function handleValues(val1, val2) {
    let new_values = {};
    new_values[props.fields.field1.name] = val1;
    new_values[props.fields.field2.name] = val2;
    let pk = props.action === "update" ? props.obj["pk"] : "";
    try {
      await actionCreateOrUpdate(
        props.table_name,
        props.action,
        new_values,
        pk
      );
      await props.mutate();
      await setShow(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        {props.action}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.action} {props.table_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MutableForm
            handleForm={handleValues}
            fields={props.fields}
            table_name={props.table_name}
            obj={props.obj}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
