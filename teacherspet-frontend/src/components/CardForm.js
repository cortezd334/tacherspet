import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitCardForm } from '../actions/index'

class CardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            front: "",
            back: ""
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
        this.setState({
            front: "",
            back: ""
        })
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.front} name="front"/>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.back} name="back"/>
                <input type="submit"/>
            </form>
        );
    }
}

export default connect(null, { submitCardForm })(CardForm);
