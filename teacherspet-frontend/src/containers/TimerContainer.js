import React, { Component } from 'react';
import Timer from '../components/Timer';

class TimerContainer extends Component {

    state = {
        seconds: 0,
        minutes: 0
    }

    
    render() {

        const handleChange = (e) => {
            this.setState({
                minutes: e.target.value
            })
        }

        const changeHandler = (e) => {
            this.setState({
                seconds: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()

            setInterval(() => {
                const { seconds, minutes } = this.state
        
                if (seconds > 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1
                    }))
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(this.myInterval)
                    } else {
                        this.setState(({ minutes }) => ({
                            minutes: minutes - 1,
                            seconds: 59
                        }))
                    }
                }
            }, 1000)
        }
        return (
            <>
                <h2>This is the Timer</h2>
                <input type='number' placeholder='minutes' minutes={this.state.minutes} onChange={handleChange} required/>
                <input type='number' placeholder='seconds' seconds={this.state.seconds} onChange={changeHandler} required/>
                <button onClick={handleSubmit}>Start</button>
                <Timer seconds={this.state.seconds} minutes={this.state.minutes}/>
            </>
        );
    }
}

export default TimerContainer;
