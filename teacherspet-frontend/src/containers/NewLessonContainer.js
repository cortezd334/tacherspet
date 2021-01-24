import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardForm from '../components/CardForm'
import { connect } from 'react-redux'
import Card from '../components/Card'

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
                            {this.props.cards.filter(card => card.lesson === this.state.name).map(card => <Card card={card} />)}
                        </Col>
                        <Col>
                            <div className="popup">
                                <div className="grey-box">
                                </div>
                                <CardForm lesson={this.state.name}/>
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
                        {this.props.cards.filter(card => card.lesson === this.state.name).map(card => <Card card={card} />)}
                    </Col>
                </Row>
                <button className="save-lesson">
                    <span>Save</span>
                </button>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(NewLessonContainer);

