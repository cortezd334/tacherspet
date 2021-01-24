import React, { Component } from 'react';
import Cards from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class LessonSummary extends Component {
    render() {
        return (
            <div className="lesson-card">
                <Cards className="lesson-summary-card">
                    <Cards.Body>
                    <Link to={`/present/${this.props.lesson}`} style={{textDecoration: 'none'}}><button className="card-buttons">Present</button></Link>
                        <button className="card-buttons">Edit</button>
                    </Cards.Body>
                </Cards>
                <p>{this.props.lesson}</p>
            </div>
        );
    }
}

export default LessonSummary;
