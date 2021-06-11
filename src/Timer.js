import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({initialMinutes, initialSeconds, color, handleStartClicked}) => {
    // initialization of states
    const [ minutes, setMinutes ] = useState(initialMinutes);
    const [ seconds, setSeconds ] = useState(initialSeconds);
    const [ isActive, setIsActive ] = useState(false);

    // toggles the start/pause buttons
    function toggle() {
        if(isActive){
            handleStartClicked(isActive);
        }
        setIsActive(!isActive);
    }

    // resets the timer
    function reset() {
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        handleStartClicked(false);
        setIsActive(false);
    }

    // updates the current time remaining
    useEffect(()=>{
        let myInterval = null;
        if(isActive){   // if the start button is pressed
            myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
        }else if(!isActive && minutes!==initialMinutes && seconds!==initialSeconds){
            // if the pause button is pressed
            clearInterval(myInterval);
        }
        return ()=> {
            clearInterval(myInterval);
        };
    }, [isActive, minutes, seconds, initialMinutes, initialSeconds]);   // dependencies

    return (
        <div>
            {/* the timer */}
            <div className="pt-4 font-sans font-family: Roboto font-light text-gray-900 text-9xl">
            { minutes === 0 && seconds === 0
                ? <h1> 0:00</h1> 
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            }
            {handleStartClicked(isActive)}
            </div>
            {/* the buttons */}
            <div className="pt-5 flex justify-around">
                <button className={`rounded-xl mt-5 p-2 mb-3 bg-${color}-600 w-20 self-end font-sans font-semibold text-white hover:bg-${color}-500 active:bg-${color}-700 transition-all place-self-center`} onClick={reset}>RESET</button>
                <button className={`rounded-xl mt-5 p-2 mb-3 bg-${color}-600 w-20 self-end font-sans font-semibold text-white hover:bg-${color}-500 active:bg-${color}-700 transition-all place-self-center`} onClick={toggle}>{isActive ? "PAUSE" : "START"}</button>
            </div>
        </div>
    )
}

export default Timer;