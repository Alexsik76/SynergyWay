import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

import FormCreate from "./formCreate";
export default function ModalCreate(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Handle fields
  const [username, setUsername] = useState()
  const [group, setGroup] = useState()
  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleGroup = (event) => {
    setGroup(event.target.value)
  }
  const userCreate = () => {
    props.userCreate(
                      {
                      username: username,
                      groups: group
                      }
                  )

    setShow(false)
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCreate handleUsername={handleUsername}
                      handleGroup={handleGroup}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

