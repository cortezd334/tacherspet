import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardForm from '../components/CardForm';
import StudentForm from '../components/StudentForm';




class TeacherContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><h2>This is the Teacher Portal</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Create Card</h2>
                        <CardForm />
                    </Col>
                    <Col>
                        <h2>Add Student</h2>
                        <StudentForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TeacherContainer;
