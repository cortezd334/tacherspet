import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SettingsContainer extends Component {
    render() {
        return (
            <Container className='background-style' fluid>
                <Row>
                    <Col><h2>Settings</h2></Col>
                </Row>
            </Container>
        );
    }
}

export default SettingsContainer;
