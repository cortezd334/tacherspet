import React, { useState } from 'react';

const Timer = ({ start, remainder, after }) => {
       
    let prog = (remainder/start) * 300
    let newProg = (after/start) * 300

    return (
        <>
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