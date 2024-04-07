import React, { Component } from 'react'
import logo from '../../assets/img/Abeer_logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';


export default class MyNavbar extends Component {
    render() {
        return (


            <Navbar expand="sm md " className="bg-transparent ">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt='Abeer Logo' className="img-fluid" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Offcanvas >
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 gap-2 gap-md-3 gap-lg-5">
                                <Nav.Link href="#action1">
                                    الرئيسية
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    مهاراتي
                                </Nav.Link>

                                <Nav.Link href="#action3">
                                    اعمالي
                                </Nav.Link>

                            </Nav>
                            <Form className="d-flex mt-1">
                                <Button variant="btn btn-light">
                                    تواصل معي
                                </Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        );
    }
}
