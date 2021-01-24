import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardList from './CardList'
import Container from 'react-bootstrap/Container'
import TimerContainer from './TimerContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class DisplayContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            setShow: true
        }
    }
    
    retrieveLesson = () => {
        return this.props.location.pathname
    }

    handleClose = () => this.setState({setShow: false})

    render() {
        return (
            <Container className='dis' fluid>
                <Row>
                    {/* <Col><h2>Display Page</h2></Col> */}
                    <Col><Link to={"/lessons"} style={{textDecoration: 'none'}}><button className="create-new-lesson-button">Back to lessons</button></Link></Col>
                    <Modal show={this.state.setShow} animation={false}>
                        <Modal.Body>Ready to Play?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Let's start
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
                <Row>
                    <Col xs={3} className='timer'>
                        <TimerContainer />
                    </Col>
                    <CardList lesson={this.retrieveLesson()}/>
                </Row>
            </Container>
        );
    }
}

export default DisplayContainer;
