import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useSWRConfig} from "swr";

import FormCreate from "./formCreate";
import {get_url, createObject} from "./api_services";

export default function ModalCreate() {
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
    const {mutate} = useSWRConfig()

    async function handleCreate() {
        const path_part = '/users/'
        try {
            await createObject({
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
                Create
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
                    <Button variant="primary" onClick={handleCreate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

