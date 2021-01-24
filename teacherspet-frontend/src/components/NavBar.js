import { React } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="login" href="/teacher">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="signup"href="/">Sign up</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
        // <div className="nav-bar">
        //     <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Home</Button>{' '}</Link>
        //     <Link to={"/teacher"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Teacher Portal</Button>{' '}</Link>
        //     <Link to={"/display"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Classroom</Button>{' '}</Link>
        // </div>
    );
}

export default NavBar;