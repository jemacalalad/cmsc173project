import React from "react";
import "./index.css";

function Task({name}){
    return(
        <div className="rounded-xl my-5 px-3 h-14 flex flex-row justify-between items-center bg-yellow-500">
            <span className="font-sans font-family: Roboto font-normal text-gray-900 text-md select-none truncate">{name}</span>
            <button className="rounded-full" onClick={() => {console.log("Delete")}}>X</button>
        </div>
    );
}

export default Task;