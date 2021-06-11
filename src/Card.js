import React from "react";
import deleteIcon from "./icons/delete.png";
import "./index.css";

function Card({subject, tasks, colors, click, deleteCard}){
    // list of possbile colors
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

    return(
        // the card
        <div className={`m-5 flex flex-col bg-gradient-to-r from-${color}-300 to-${color2}-300 rounded-xl w-auto`}>
            <div className="rounded-full bg-transparent w-10 h-10 bg-gray-400 hover:bg-gray-200 active:bg-gray-600 transition-all">
                {/* button to delete the card */}
                <button className="w-10 h-10" onClick={() => deleteCard(subject)}>
                    <img className="w-full h-full" src={deleteIcon} alt="delete"/>
                </button>
            </div>
            {/* subject */}
            <span className="select-none py-5 px-5 font-sans font-family: Roboto font-bold text-center text-3xl">{subject}</span>
            {/* the View button */}
            <button renderas='button' className={`select-none mx-5 my-5 px-3 py-2 place-self-center font-family: Roboto font-bold text-white w-max bg-${color}-500 hover:bg-${color}-700 active:bg-${color}-900 rounded-xl transition-all`}onClick={() => click(subject, tasks, colors)}>View</button>
        </div>
    );
}

export default Card;