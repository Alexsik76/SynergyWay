import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Container fluid="md">
        <div className="row justify-content-center">{<Outlet />}</div>
      </Container>
    </>
  );
}
