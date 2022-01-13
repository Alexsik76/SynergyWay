import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import MutableForm from "./MutableForm";
import { actionCreateOrUpdate, getInitValues } from "./utils";

export default function MutableModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  //Handle fields
  const initValues = getInitValues(props.table_name, props.action, props.obj);

  async function handleForm(val1, val2) {
    try {
      if (val1 && val2) {
        await actionCreateOrUpdate({
          initVals: initValues,
          action_name: props.action,
          new_val1: val1,
          new_val2: val2,
          mutate: props.mutate,
        });
        // await cleanFields()
        await setShow(false);
      }
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
          <MutableForm handleForm={handleForm} initValues={initValues} />
        </Modal.Body>
      </Modal>
    </>
  );
}
