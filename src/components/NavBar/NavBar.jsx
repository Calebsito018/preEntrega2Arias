import React from 'react'
//components
import CartWidget from '../CartWidget/CartWidget';
// import bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//Link Router Dom
import { Link } from 'react-router-dom';
//css
import "./navbar.css"

const NavBar = () => {
    return (
        <div>
            <>
                {[false].map((expand) => (
                    <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="/">Electro Baires</Navbar.Brand>
                            {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                                <FontAwesomeIcon icon={faBars} />
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Electro Baires
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Link className='nav-link'to="/">Inicio</Link>
                                        <Link className='nav-link'to="/products">Productos</Link>
                                        <Link className='nav-link'to="/404">Contacto</Link>
                                        <Link className='nav-link'to="/404">Referencias</Link>

                                        <NavDropdown
                                            title="Categorias"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <Link className='dropdown-item' to="/category/cabezales">Cabezales</Link>
                                            <Link className='dropdown-item' to="/category/farolas">Farolas</Link>
                                            <Link className='dropdown-item' to="/category/industriales">Industriales</Link>
                                            <Link className='dropdown-item' to="/category/lineales">Lineales</Link>
                                            <Link className='dropdown-item' to="/">Action</Link>
                                            <Link className='dropdown-item' to="/">Action</Link>
                                            <Link className='dropdown-item' to="/">Action</Link>
                                            <Link className='dropdown-item' to="/">Action</Link>

                                        </NavDropdown>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Buscar"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Buscar</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            <CartWidget />
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    )
}

export default NavBar