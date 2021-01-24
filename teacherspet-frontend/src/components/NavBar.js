import { React } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/language.png';


const NavBar = () => {
    return (
        <>
            <Navbar>
                <Navbar.Brand className="nav-title" href="#home">
                    Teacher's Pet
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Nav.Link>
                    <Nav.Link className="login" href="/lessons">Login</Nav.Link>
                    <Nav.Link className="signup" href="/">Sign up</Nav.Link>
                </Navbar.Collapse>
            </Navbar>

            {/* <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <img src="../images/language.png" alt="global language" />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="login" href="/teacher">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="signup"href="/">Sign up</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </>
        // <div className="nav-bar">
        //     <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Home</Button>{' '}</Link>
        //     <Link to={"/teacher"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Teacher Portal</Button>{' '}</Link>
        //     <Link to={"/display"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Classroom</Button>{' '}</Link>
        // </div>
    );
}

export default NavBar;