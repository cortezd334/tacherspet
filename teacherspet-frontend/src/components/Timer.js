import React, { Component } from 'react';

class Timer extends Component {
    render () {
        return (
            <>
            <h5>{this.props.minutes}:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}</h5>
            </>
        );
    }
}
export default Timer;