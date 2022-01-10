import {Form} from "react-bootstrap";
import React from "react";

export default function FormCreate(props) {
  const field_name1 = (props.table_name==='users') ? 'Username': 'Group name'
  const field_name2 = (props.table_name==='users') ? 'Group': 'Description'
  return(
  <Form>
  <Form.Group className="mb-3" controlId="formUpdateUsername">
    <Form.Label>{field_name1}</Form.Label>
    <Form.Control type="text" placeholder={field_name1} onChange={props.handleVal1}/>
    <Form.Text className="text-muted" >
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formUpdateGroup">
    <Form.Label>{field_name2}</Form.Label>
    <Form.Control type="text" placeholder={field_name2} onChange={props.handleVal2}/>
  </Form.Group>
</Form>
  )
}