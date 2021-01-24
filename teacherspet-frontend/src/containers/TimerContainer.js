import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

const TimerContainer = () => {
    
    const timeForm = {
        min: '',
        sec: ''
    }
    const[time, setTime] = useState(timeForm)
    const[start, setStart] = useState(0)

    useEffect(() => {
        setStart(+(time.min * 60) + +(time.sec))
    }, [time]);

    const change = (e) => {
        let obj = {[e.target.name]: e.target.value}
        setTime(prevState => ({...prevState, ...obj}))
    }

    return (
        <>
        <div className='iGroup'>
            <h2 id='boxTitle'>Time</h2>
            <input className='input' type='number' placeholder='minutes' name='min' onChange={change} required/>
            <input className='input' type='number' placeholder='seconds' name='sec' onChange={change} required/>
        </div>
            <Timer start={start}/>
        </>
    );
}

export default TimerContainer;