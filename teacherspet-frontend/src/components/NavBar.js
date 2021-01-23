import { React } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to={"/"} style={{textDecoration: 'none'}}><button>Home</button></Link>
            <Link to={"/teacher"} style={{textDecoration: 'none'}}><button>Teacher Portal</button></Link>
            <Link to={"/display"} style={{textDecoration: 'none'}}><button>Classroom</button></Link>
        </div>
    );
}

export default NavBar;