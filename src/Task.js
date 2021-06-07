import React from "react";
import "./index.css";

function Task({name}){
    return(
        <div className="Card">
            <h2>{name}</h2>
            <button onClick={() => {console.log("Delete")}}>X</button>
        </div>
    );
}

export default Task;