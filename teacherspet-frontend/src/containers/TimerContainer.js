import React, { useState } from 'react';
import Timer from '../components/Timer';

const TimerContainer = () => {
    
    const[min, setMin] = useState(0)
    const[sec, setSec] = useState(0)
    const[start, setStart] = useState(0)

        
    const handleChange = (e) => {
        setMin(e.target.value)
        beg()
    }

    const changeHandler = (e) => {
        setSec(e.target.value)
        beg()
    }

    const beg = () => {
        setStart(+(min * 60) + +(sec))
    }

    //only taking the first number of sec eg. 50 would be 5

    const pauseTimer = () => {
        //figure out how to pause interval
    }


        return (
            <>
                <h2>Time</h2>
                <input type='number' placeholder='minutes'  onChange={handleChange} required/>
                <input type='number' placeholder='seconds'  onChange={changeHandler} required/>
                <Timer start={start}/>
            </>
        );
}

export default TimerContainer;