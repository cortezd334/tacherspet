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
                    <Col><h2>Display Page</h2></Col>
                </Row>
                <Row>
                    <Col><TimerContainer /></Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 2 }}><CardList /></Col>
                </Row>
            </Container>
        );
    }
}

export default DisplayContainer;
