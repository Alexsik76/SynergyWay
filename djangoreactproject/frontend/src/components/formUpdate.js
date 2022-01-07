import {Button, Form} from "react-bootstrap";
import React, {useRef, useState} from "react";

export default function FormUpdate(props) {


  return(
  <Form>
  <Form.Group className="mb-3" controlId="formUpdateUsername">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={props.handleUsername} defaultValue={props.username}/>
    <Form.Text className="text-muted" >
      We`ll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formUpdateGroup">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="Group" onChange={props.handleGroup} defaultValue={props.group}/>
  </Form.Group>
</Form>
  )
}