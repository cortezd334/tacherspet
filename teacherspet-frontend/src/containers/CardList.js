import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../components/Card'

class CardList extends Component {
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

export default connect(mapStateToProps)(CardList);