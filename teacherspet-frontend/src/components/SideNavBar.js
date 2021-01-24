import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import activeLesson from '../images/lessons-active.png'
import inactiveStudent from '../images/students-inactive.png'
import settings from '../images/settings.png'


class SideNavBar extends Component {
    renderLessonButtonColor = () => {
        let buttonColor;
        const url = this.props.location.pathname
        if (url === '/lessons' || url === '/lessons/new') {
            buttonColor = 'active-button'
        } else {
            buttonColor = ''
        }
        return buttonColor;
    }

    renderStudentButtonColor = () => {
        let buttonColor;
        const url = this.props.location.pathname
        if (url === '/students' || url === '/students/new') {
            buttonColor = 'active-button'
        } else {
            buttonColor = ''
        }
        return buttonColor;
    }

    renderSettingsButtonColor = () => {
        let buttonColor;
        const url = this.props.location.pathname
        if (url === '/settings') {
            buttonColor = 'active-button'
        } else {
            buttonColor = ''
        }
        return buttonColor;
    }

    render() {
        return (
            <div className="side-nav-bar background-style">
                <Link to={"/lessons"} style={{textDecoration: 'none'}}>
                    <button className={`icon-lesson ${this.renderLessonButtonColor()}`}>
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
                    <button className={`icon-student ${this.renderStudentButtonColor()}`}>
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
                <Link to={'/settings'} style={{textDecoration: 'none'}}>
                <button className={`icon-settings ${this.renderSettingsButtonColor()}`}>
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
