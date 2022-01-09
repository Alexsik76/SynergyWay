import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useSWRConfig} from "swr";

import FormUpdate from "./formUpdate";
import {get_url, updateObject} from "./api_services";

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
    const {mutate} = useSWRConfig()

    async function handleUpdate() {
        const path_part = `/users/${props.user.pk}/`
        try {
            await updateObject({
                    username: username,
                    groups: group
                },
                path_part)
            await mutate(get_url('/users/'))
            await setShow(false)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update
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
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

