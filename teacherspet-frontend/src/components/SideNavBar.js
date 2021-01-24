import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavBar extends Component {
    render() {
        return (
            <div className="side-nav-bar">
                <Link to={"/lessons"} style={{textDecoration: 'none'}}><button className="icon-lesson">Lessons</button></Link>
                <Link to={"/students"} style={{textDecoration: 'none'}}><button className="icon-student">Students</button></Link>

            </div>
        );
    }
}

export default SideNavBar;
