import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import timer from '../images/timer.png';

const TimerContainer = () => {
    
    const timeForm = {
        min: '',
        sec: ''
    }
    const[time, setTime] = useState(timeForm)
    const[start, setStart] = useState(0)
    const [remainder, setRemainder] = useState(0)
    const [after, setAfter] = useState(0)
    const [play, setPlay] = useState(false)
    const [display, setDislay] = useState(false)

    useEffect(() => {
        setStart(+(time.min * 60) + +(time.sec))
    }, [time]);

    const change = (e) => {
        let obj = {[e.target.name]: e.target.value}
        setTime(prevState => ({...prevState, ...obj}))
    }

    let inter

    const handleClick = () => {

        setRemainder(start)
        setPlay(true)
        setDislay(true)
        
        if(after > 0) {
            inter = setInterval(() => {
                setAfter(after => after - 1);
            }, 1000);
            // return () => clearInterval(inter);
        } else {
            inter = setInterval(() => {
                setRemainder(remainder => remainder - 1);
            }, 1000);
            // return () => clearInterval(inter);
        }
    }

    const clickHandler = () => {
        setAfter(remainder)
        setPlay(false)
    }

    return (
        <>
        <div className='iGroup'>
            <h2 id='boxTitle'><img id='timer' src={timer}/>       Time</h2>
            <input className='input' type='number' placeholder='minutes' name='min' onChange={change} required/>
            <input className='input' type='number' placeholder='seconds' name='sec' onChange={change} required/>
            {play ?
                <button className='tBtn' onClick={clickHandler}>Pause</button>
                :
                <button className='tBtn' onClick={handleClick}>Start</button>
            }
        </div>
        {display ?
        <Timer start={start} remainder={remainder} after={after}/>
        :
        null
        }
        </>
    );
}

export default TimerContainer;

//need a catch - after === 0 button goes back to start && Timer disappears (display(false))
//after pause/restart, bar going all the way down then starting at mid again