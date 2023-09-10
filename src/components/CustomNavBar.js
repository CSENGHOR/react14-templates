import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function CustomNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">EarthDX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink className={"nav-link"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={"nav-link"} to="/service">
                            Service
                        </NavLink>
                        <NavLink className={"nav-link"} to="/products">
                            Products
                        </NavLink>
                        <NavLink className={"nav-link"} to="/aboutus">
                            AboutUs
                        </NavLink>
                        <NavLink className={"nav-link"} to="/admin/products">
                            Product Dashboard
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavBar;