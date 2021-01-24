import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Student from '../components/Student.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class StudentContainer extends Component {
    render() {
        return (
            <Container className='background-style' fluid>
                <Row>
                    <Col><h2>Students</h2></Col>
                    <button>Add a new student</button>
                    {/* eventually this will be a link to New Student Container that displays form */}
                </Row>
                <Row>
                    <Col><Student/></Col>
                </Row>
            </Container>
        );
    }
}

export default StudentContainer;
