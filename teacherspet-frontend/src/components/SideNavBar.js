import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import activeLesson from '../images/lessons-active.png'
import inactiveStudent from '../images/students-inactive.png'
import settings from '../images/settings.png'


class SideNavBar extends Component {
    render() {
        return (
            <div className="side-nav-bar">
                <Link to={"/lessons"} style={{textDecoration: 'none'}}>
                    <button className="icon-lesson">
                        <img
                            src={activeLesson}
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /><br />
                        <span>Lessons</span>
                    </button></Link>
                <Link to={"/students"} style={{textDecoration: 'none'}}>
                    <button className="icon-student">
                        <img
                            src={inactiveStudent}
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /><br />
                        <span>Students</span>
                    </button>
                </Link>
                <Link to={'/display'} style={{textDecoration: 'none'}}>
                <button className="icon-settings">
                    <img
                        src={settings}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /><br />
                    <span>Settings</span>
                    </button>
                </Link>

            </div>
        );
    }
}

export default SideNavBar;
