import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardForm from '../components/CardForm'

class NewLessonContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            toggle: false
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.setState({
            name: "",
            toggle: false
        })
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        if (this.state.toggle) {
            return (
                <Container fluid>
                    <Row>
                        <Col md={{ span: 5, offset: 2 }}>
                            <form>
                                <label>Name of the Lesson</label><br />
                                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} name="name"/><br />
                            </form>
                            <div className="add-cards" onClick={this.toggle}>
                                <p>+</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="popup">
                                <div className="grey-box">
                                </div>
                                <CardForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        }
        return (
            <Container fluid>
                <Row>
                    <Col md={{ span: 5, offset: 2 }}>
                        <form>
                            <label>Name of the Lesson</label><br />
                            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} name="name"/><br />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="add-cards" onClick={this.toggle}>
                            <p>+</p>
                        </div>
                    </Col>
                </Row>
                <button className="save-lesson">
                    <span>Save</span>
                </button>
            </Container>
        );
    }
}

export default NewLessonContainer;

