import React, { Component } from 'react';
import Cards from 'react-bootstrap/Card';
import { removeCard } from '../actions/index'
import { connect } from 'react-redux'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const text = this.state.toggle ? this.props.card.front : this.props.card.back

        return (
            <>
                <Cards onClick={this.handleClick} >
                    <Cards.Body>
                    <Cards.Text>{text}</Cards.Text>
                    {/* <Button className="card-buttons" onClick={() => this.props.removeCard(this.props.card)} variant="primary">Remove</Button> */}
                    </Cards.Body>
                </Cards>
            </>
        );
    }
}

export default connect(null, { removeCard })(Card);
