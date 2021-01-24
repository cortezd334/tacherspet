import React, { Component } from 'react';
import { connect } from 'react-redux'
import LessonSummary from '../components/LessonSummary';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardColumns from 'react-bootstrap/CardColumns'
import { Link } from 'react-router-dom';

class LessonsContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><h2>Lessons</h2></Col>
                    <Col><Link to={"/lessons/new"} style={{textDecoration: 'none'}}><button>Create a new lesson</button></Link></Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 2 }}>
                        <CardColumns>{this.props.lessons.map(lesson => <LessonSummary lesson={lesson} />)}</CardColumns>
                    </Col>
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
