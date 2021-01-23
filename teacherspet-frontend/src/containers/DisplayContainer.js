import React, { Component } from 'react';
import CardList from './CardList'
import Container from 'react-bootstrap/Container'
import TimerContainer from './TimerContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DisplayContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><h2>This is the Display Page</h2></Col>
                </Row>
                <Row>
                    <Col><CardList /></Col>
                    <Col><TimerContainer /></Col>
                </Row>
            </Container>
        );
    }
}

export default DisplayContainer;
