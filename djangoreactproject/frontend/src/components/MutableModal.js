import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import MutableForm from "./MutableForm";
import { actionCreateOrUpdate, getInitValues } from "./utils";

export default function MutableModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Handle fields

  const initValuesMain = getInitValues(
    props.table_name,
    props.action,
    props.obj
  );
  const [val1, setVal1] = useState(initValuesMain.field1Val);
  const [val2, setVal2] = useState(initValuesMain.field2Val);

  useEffect(() => {
    return function cleanup() {
      if (!show) {
        setVal1(initValuesMain.field1Val);
        setVal2(initValuesMain.field2Val);
      }
    };
  }, [show, initValuesMain.field1Val, initValuesMain.field2Val]);

  const handleVal1 = (event) => {
    setVal1(event.target.value);
  };
  const handleVal2 = (event) => {
    setVal2(event.target.value);
  };

  async function handleAction() {
    try {
      await actionCreateOrUpdate({
        initVals: initValuesMain,
        action_name: props.action,
        new_val1: val1,
        new_val2: val2,
        mutate: props.mutate,
      });
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
            handleVal1={handleVal1}
            handleVal2={handleVal2}
            val1={val1}
            val2={val2}
            table_name={props.table_name}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAction}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
