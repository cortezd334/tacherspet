import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitCardForm } from '../actions/index'
import { addLesson } from '../actions/index'


class CardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            front: "",
            back: "",
            lesson: this.props.lesson
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.submitCardForm(this.state)
        this.props.addLesson(this.props.lesson)

        this.setState({
            front: "",
            back: "",
            lesson: this.props.lesson
        })
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Card Front</label><br />
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.front} name="front"/><br/>
                <label>Card Back</label><br />
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.back} name="back"/><br/>
                <input className="card-submit" type="submit" value="Save Changes"/>
            </form>
        );
    }
}

export default connect(null, { submitCardForm, addLesson })(CardForm);
