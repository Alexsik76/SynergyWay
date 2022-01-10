import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useSWRConfig} from "swr";

import FormCreate from "./formCreate";
import {get_url, createObject} from "./api_services";

export default function DefaultModalCreate(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Handle fields
    const [val1, setVal1] = useState()
    const [val2, setVal2] = useState()
    const handleVal1 = (event) => {
        setVal1(event.target.value)
    }
    const handleVal2 = (event) => {
        setVal2(event.target.value)
    }
    const {mutate} = useSWRConfig()

    async function handleCreate() {
        const path_part = `/${props.table_name}/`;
        let fields = (props.table_name === 'users') ? ['username', 'groups']: ['name', 'description']
        const newObject = {}
        newObject[fields[0]] = val1
        newObject[fields[1]] = val2
        try {
            await createObject(newObject, path_part)
            await mutate(get_url(`/${props.table_name}/`))
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
                    <Modal.Title>Create {props.table_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCreate handleVal1={handleVal1}
                                handleVal2={handleVal2}
                                table_name={props.table_name}
                    />
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

