import React, { useState } from "react";
import Task from "./Task";
import "./index.css";

function Pomo({subject, task_list, backClick}) {
    console.log(subject);
    console.log(task_list);
    const tasks = task_list;
    const cardName = subject;
    if(cardName !== "null"){
        return(
            <div className="min-w-screen min-h-screen bg-gray-400">
                <div className="px-7 pt-9 pb-7">
                    <button onClick={() => backClick()} >back</button>
                </div>
                <div className="px-10">
                    <span className="font-sans font-family: Roboto font-bold text-gray-900 text-5xl select-none">{cardName}</span>
                </div>
                <div className="mt-10 flex flex-row justify-evenly">
                    <div className="flex flex-col rounded-2xl w-1/3 max-h-96 bg-pink-500 justify-evenly">
                        <div className="p-3 h-1/5 text-center">
                            <span className="font-sans font-family: Roboto font-bold text-gray-900 text-2xl select-none">Timer</span>
                        </div>
                        <div className="p-3 h-1/2 text-center place-content-center">
                            <span className="font-sans font-family: Roboto font-light text-gray-900 text-9xl select-none">00:00</span>
                        </div>
                        <button className='rounded-xl p-2 mr-7 mb-3 bg-red-300 w-20 self-end font-sans font-family: Roboto font-normal' onClick={() => {console.log("Start")}}>Start</button>
                    </div>
                    <div className="rounded-xl px-7 pt-7 pb-3 w-7/12 max-h-96 place-content-start overflow-auto">
                        <span className="font-sans font-family: Roboto font-bold text-gray-900 text-2xl select-none">Tasks</span>
                        {cardName != "none" ? (
                        <>
                            {tasks.map(task => (
                                <Task name={task.name}/>
                            ))}
                        </>
                         ) : null}
                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Pomo;