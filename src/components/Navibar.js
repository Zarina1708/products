import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Slyles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link{
        color: #adb1b8;
        &:hover{
            color: write
        }
    }
`

export default function Navibar(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
        return(
            <>
                <Slyles>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>Geeks</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav"/>
                                <Nav className='mr-auto'>
                                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                    <Nav.Link><Link to='/products'> Products </Link></Nav.Link>
                                    <Nav.Link><Link to='/about'> About </Link></Nav.Link>
                                </Nav>
                                <Nav>
                                    <Button variant='primary' className="m-2" onClick={handleShow}>Log In</Button>
                                    <Button variant='primary' className="m-2" onClick={handleShow}>Sign out</Button>
                                </Nav>
                            <Navbar.Collapse/>
                        </Container>
                    </Navbar>
                </Slyles>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="fromBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="enter your email address" />
                                <Form.Text className="text-muted">share your email</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="fromBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="enter your password" />
                            </Form.Group>

                            <Form.Group controlId="fromBasicCheckbox">
                                <Form.Check type="checkbox" label="remember me"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
