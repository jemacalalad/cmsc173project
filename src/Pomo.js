import React from "react";
import "./index.css";

function Pomo({cards}){
    const tasks = cards.tasks;
    return(
        <div className="Pomo">
            <div className="Timer">
                <h1>Timer</h1>
                <button onClick={() => {console.log("Start")}}>Start</button>
            </div>
            <div className="Tasks">
                {tasks.map(task => (
                    <Task name={tasks.task}/>
                ))}
            </div>
        </div>
    );
}

export default Pomo;