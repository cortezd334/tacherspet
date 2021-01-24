import React, { useState } from 'react';

const Timer = ({ start }) => {

    const [remainder, setRemainder] = useState(0)
    const [after, setAfter] = useState(0)
    const [play, setPlay] = useState(false)
       
    let prog = (remainder/start) * 300
    let newProg = (after/start) * 300
    let time

    const handleClick = () => {

        setRemainder(start)
        setPlay(true)
        
        if(after > 0) {
            time = setInterval(() => {
                setAfter(after => after - 1);
            }, 1000);
            return () => clearInterval(time);
        } else {
            time = setInterval(() => {
                setRemainder(remainder => remainder - 1);
            }, 1000);
            return () => clearInterval(time);
        }
    }

    const clickHandler = () => {
        setAfter(remainder)
        setPlay(false)
    }

    return (
        <>
            {play ?
                <button className='tBtn' onClick={clickHandler}>Pause</button>
                :
                <button className='tBtn' onClick={handleClick}>Start</button>
            }
            { after > 0 ?
            (<div className='progress'>
                <div style={{width: `${newProg}px`}} className='bar'></div>
            </div>)
            :
            (<div className='progress'>
                <div style={{width: `${prog}px`}} className='bar'></div>
            </div>)
            }
        </>
    );
}
export default Timer;