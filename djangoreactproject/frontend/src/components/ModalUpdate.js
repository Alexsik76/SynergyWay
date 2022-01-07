import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

import FormUpdate from "./formUpdate";
export default function ModalUpdate(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Handle fields
  const [username, setUsername] = useState(props.user.username)
  const [group, setGroup] = useState(props.user.groups)
  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleGroup = (event) => {
    setGroup(event.target.value)
  }
  const userSave = () => {
    console.log(group)
    props.userSave(
                      {pk: props.user.pk,
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
          <FormUpdate username={username}
                      handleUsername={handleUsername}
                      group={group}
                      handleGroup={handleGroup}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

