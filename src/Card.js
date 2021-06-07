import React from "react";
import "./index.css";

function Card({subject, tasks, click}){
    const colorList = ["green", "blue", "red", "purple", "yellow", "pink"];

    const color = colorList[Math.floor(Math.random()*colorList.length)];
    let color2;
    do {
        color2 = colorList[Math.floor(Math.random()*colorList.length)];
    }while(color2 === color);   // so that the gradient bg will not have the same color

    return(
        // the card
        <div className={`m-5 flex flex-col bg-gradient-to-r from-${color}-200 to-${color2}-200 rounded-xl w-72`}>
            <span className="py-5 place-self-center font-sans font-bold text-3xl">{subject}</span>
            <button className={`my-5 p-3 font-bold text-white place-self-center w-max bg-${color}-600 hover:bg-${color}-400 active:bg-${color}-800 rounded-xl`} onClick={() => {click(subject)}}>View</button>
        </div>
    );
}

export default Card;