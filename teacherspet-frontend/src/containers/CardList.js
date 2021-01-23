import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../components/Card'
import { fetchCards } from '../actions/index'
import CardColumns from 'react-bootstrap/CardColumns'

class CardList extends Component {
    componentDidMount = () => {
        if (this.props.cards.length === 0) {
            this.props.fetchCards()
        }
    }

    render() {
        return (
            <CardColumns>
                {this.props.cards.map(card => <Card card={card} />)}
            </CardColumns>

        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardList);