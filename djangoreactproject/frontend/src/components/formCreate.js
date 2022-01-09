import {Form} from "react-bootstrap";
import React from "react";

export default function FormCreate(props) {

  return(
  <Form>
  <Form.Group className="mb-3" controlId="formUpdateUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={props.handleUsername}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formUpdateGroup">
    <Form.Label>Group</Form.Label>
    <Form.Control type="text" placeholder="Group" onChange={props.handleGroup}/>
  </Form.Group>
</Form>
  )
}