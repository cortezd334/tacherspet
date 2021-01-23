import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../components/Card'
import { fetchCards } from '../actions/index'

class CardList extends Component {
    componentDidMount = () => {
        if (this.props.cards.length === 0) {
            this.props.fetchCards()
        }
    }

    render() {
        return (
            <ul>
                {this.props.cards.map(card => <li><Card card={card} /></li>)}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, { fetchCards })(CardList);