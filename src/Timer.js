import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({initialMinutes, initialSeconds, colors, handleStartClicked}) => {
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
        <div className="flex flex-col content-between h-full justify-evenly">
            {/* the timer */}
            <div className="sm:pt-1 md:pt-3 lg:pt-5 xl:pt-7 h-1/2 sm:h-1/2 md:h-1/2 lg:h-2/3 xl:h-3/4 text-center place-contents-center">
            { minutes === 0 && seconds === 0
                    ? <span className="font-sans font-family: Roboto font-light text-gray-100 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl select-none">
                        00:00
                        </span>
                    : <span className="font-sans font-family: Roboto font-light text-gray-100 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl select-none">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
            }
            {handleStartClicked(isActive)}
            </div>
            {/* the buttons */}
            <div className="mx-5 my-5 sm:my-0 sm:mb-3 md:my-0 md:mb-1 lg:my-0 lg:mb-3 flex justify-between content-end">
                <button className={`py-2 w-20 sm:min-w-14 sm:w-1/3 md:w-1/3 md:max-w-20 lg:w-20 xl-w-20 bg-${colors[0]}-400 hover:bg-${colors[0]}-500 active:bg-${colors[0]}-700 font-sans font-family: Roboto font-normal text-center hover:font-bold hover:text-white rounded-xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 active:-translate-y-0.5 active:scale-105 focus:outline-none focus:ring focus:ring-${colors[0]}-600 select-none`} onClick={reset}>RESET</button>
                <button className={`py-2 w-20 sm:min-w-14 sm:w-1/3 md:w-1/3 md:max-w-20 lg:w-20 xl-w-20 bg-${colors[1]}-400 hover:bg-${colors[1]}-500 active:bg-${colors[1]}-700 font-sans font-family: Roboto font-normal text-center hover:font-bold hover:text-white rounded-xl shadow-lg hover:shadow-xl transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 active:-translate-y-0.5 active:scale-105 focus:outline-none focus:ring focus:ring-${colors[1]}-600 select-none`} onClick={toggle}>{isActive ? "PAUSE" : (minutes !== 25 && seconds !== 0 ? "RESUME" : "START")}</button>
            </div>
        </div>
    )
}

export default Timer;