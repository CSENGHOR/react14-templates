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
                    <Nav className="mx-auto text-center">

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

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success me-3">Sign Up</button>
                        <button className="btn btn-warning">Log in</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavBar;