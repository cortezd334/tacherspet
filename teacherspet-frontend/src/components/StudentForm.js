import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addStudent } from '../actions/index'

class StudentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            school: "",
            grade: ""
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
        this.props.addStudent(this.state)
        this.setState({
            name: "",
            school: "",
            grade: ""
        })
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label className="test-font" >Name</label>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.front} name="name"/><br/>
                <label>School</label>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.back} name="school"/><br/>
                <label>Grade</label>
                <input type="number" onChange={(event) => this.handleChange(event)} value={this.state.back} name="grade"/><br/>
                <input type="submit"/>
            </form>
        );
    }
}

export default connect(null, { addStudent })(StudentForm);
