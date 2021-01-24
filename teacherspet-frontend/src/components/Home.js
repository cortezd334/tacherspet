import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="home-page">
                            <p>Create customized flash cards for your students</p>
                            <a href="/teacher"><button>Get Started</button></a>
                        </div>
                    </Col>
                    <Col>
                        <div className="grey-box">
                            Filler
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
