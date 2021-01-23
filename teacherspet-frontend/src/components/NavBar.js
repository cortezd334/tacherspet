import { React } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to={"/"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Home</Button>{' '}</Link>
            <Link to={"/teacher"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Teacher Portal</Button>{' '}</Link>
            <Link to={"/display"} style={{textDecoration: 'none'}}><Button variant="success" size="sm">Classroom</Button>{' '}</Link>
        </div>
    );
}

export default NavBar;