import React from "react";
import plus from "./icons/plus.png";
import "./index.css";

function Card({subject, tasks, colors, click, deleteCard}){
    const colorList = ["green", "blue", "red", "purple", "yellow", "pink"];

    let color, color2;

    // chooses gradient color for the card and saves it
    if(colors.length === 0){    // if the card is newly added
        color = colorList[Math.floor(Math.random()*colorList.length)];
        do {
            color2 = colorList[Math.floor(Math.random()*colorList.length)];
        } while (color2 === color);   // so that the gradient bg will not have the same color
        colors.push(color);
        colors.push(color2);
    }else{  // the card already has colors
        color = colors[0];
        color2 = colors[1];
    }

    console.log(colors)
    return(
        // the card
        <div className={`m-5 flex flex-col bg-gradient-to-r from-${color}-300 to-${color2}-300 rounded-xl w-auto shadow-lg`}>
            <div className="select-none rounded-full bg-transparent mx-3 mt-3 w-7 h-7 hover:bg-red-600 active:bg-gray-600 transition-all">
                {/* button to delete the card */}
                <button className="rounded-full bg-transparent w-7 h-7 transform rotate-45 hover:bg-red-500 transform hover:scale-110 transition duration-250 focus:outline-none focus:ring focus:ring-red-500" onClick={() => deleteCard(subject)}>
                    <img className="w-full h-full" src={plus} alt="delete"/>
                </button>
            </div>
            <span className="select-none py-5 px-5 font-sans font-family: Roboto font-bold text-center text-3xl">
                {subject}
            </span>
            <button renderAs='button' className={`select-none mx-5 my-5 px-3 py-2 place-self-center font-family: Roboto font-bold text-white w-max bg-${color}-500 hover:bg-${color}-600 active:bg-${color}-700 rounded-xl transition-all shadow-lg hover:shadow-xl ease-in-out transform hover:-translate-y-1 hover:scale-110 active:-translate-y-0.5 active:scale-105 focus:outline-none focus:ring focus:ring-${color}-800`} onClick={() => click(subject, tasks, colors)}>
                View
            </button>
        </div>
    );
}

export default Card;