import React, { Component } from 'react';
import Cards from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class LessonSummary extends Component {
    render() {
        return (
            <Cards>
                <Cards.Body>
                    <Button className="card-buttons">Present</Button>
                    <Button className="card-buttons">Edit</Button>
                </Cards.Body>
                <p>{this.props.lesson}</p>
            </Cards>
        );
    }
}

export default LessonSummary;
