import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardForm from '../components/CardForm';



class TeacherContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><h2>This is the Teacher Portal</h2></Col>
                </Row>
                <Row>
                    <Col><CardForm /></Col>
                </Row>
            </Container>
        );
    }
}

export default TeacherContainer;
