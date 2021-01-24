import React, { Component } from 'react';
import { connect } from 'react-redux'
import LessonSummary from '../components/LessonSummary';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

class LessonsContainer extends Component {
    render() {
        return (
            <Container className='background-style' fluid>
                <Row className="lesson-header">
                    <Col><h2>Lessons</h2></Col>
                    <Col><Link to={"/lessons/new"} style={{textDecoration: 'none'}}><button className="create-new-lesson-button">Create a new lesson</button></Link></Col>
                </Row>
                <Row>
                    <Col className="lesson-summary-container" md={{ span: 8, offset: 2 }}>{this.props.lessons.map(lesson => <LessonSummary lesson={lesson} />)}</Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        lessons: state.lessons
    }
}

export default connect(mapStateToProps)(LessonsContainer);
