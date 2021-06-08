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
        <div className={`m-5 flex flex-col bg-gradient-to-r from-${color}-300 to-${color2}-300 rounded-xl w-auto`}>
            <span className="select-none py-5 place-self-center font-sans font-family: Roboto font-bold text-center text-3xl">{subject}</span>
            <button className={`select-none my-5 px-3 py-2 font-bold text-white place-self-center w-max bg-${color}-500 hover:bg-${color}-700 active:bg-${color}-900 rounded-xl transition-all`} onClick={() => {click(subject)}}>View</button>
        </div>
    );
}

export default Card;