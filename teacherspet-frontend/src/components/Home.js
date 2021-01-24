import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar'

class Home extends Component {
    renderBackgroundImage = () => {
        let backgroundImg;
        const url = this.props.location.pathname
        if (url === '/') {
            backgroundImg = 'hero-img'
        } else {
            backgroundImg = ''
        }
        return backgroundImg;
    }

    render() {
        return (
            <Container className={`main-home-page ${this.renderBackgroundImage()}`} fluid>
                <NavBar />
                <Row>
                    <Col>
                        <div className="home-page">
                            <p>Create customized flash cards for your students</p>
                            <a href="/teacher"><button>Get Started</button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
