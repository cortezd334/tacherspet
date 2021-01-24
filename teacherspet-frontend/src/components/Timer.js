import React, { useState } from 'react';

const Timer = ({ start }) => {

    const [remainder, setRemainder] = useState(0)
       
    const handleClick = () => {

        setRemainder(start)

        setInterval(() => {
            setRemainder(remainder => remainder - 1);
        }, 1000)
    }

    const progress = () => {
        let prog = (remainder/start) * 300
        console.log(prog)
        return (
            <div className='progress'>
                <div style={{width: `${prog}px`}} className='bar'></div>
            </div>
        )
    }

    return (
        <>
            <button onClick={handleClick}>Start</button>
            {progress()}
        </>
    );
}
export default Timer;