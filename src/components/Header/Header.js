import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../helpers/fetchHelper";

export function Header() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getData("therapistTypes").then((info) => {
  //     setData(info);
  //   });
  // }, []);

  const therapistTypes = [
    "Psychology",
    "Social Worker",
    "Criminologiest",
    "Creative Arts Therapist",
    "Psychodrama Therapist",
    "Bibliotherapist",
    "Occupational Therapist",
    "Speach Therapist",
    "psycho Therapist",
    "CBT Therapist",
    "DBT Therapist",
    "NLP Therapist",
    "EMDR Therapist",
    "Coacher",
    "Animal-Assisted Therapist",
    "neurofeedback",
    "psychoanaliest",
    "Psychiatrist",
    "Family Therapist",
    "Caple Therapist",
    "Dance Therapist",
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container className="headerContainer">
        <Navbar.Brand href="#home">EzPsy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Specialties" id="basic-nav-dropdown">
              {therapistTypes.map((therapist) => {
                return (
                  <NavDropdown.Item href="#action/3.1">
                    {therapist}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="magnifying-glass-icon"
              />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log-In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign-In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
