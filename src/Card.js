import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.css";

function Card({subject, tasks, click}){
    const colorList = ["green", "blue", "red", "purple", "yellow", "pink"];

    const color = colorList[Math.floor(Math.random()*colorList.length)];
    let color2;
    do {
        color2 = colorList[Math.floor(Math.random()*colorList.length)];
    } while (color2 === color);   // so that the gradient bg will not have the same color
    
    // const RouteChange = useHistory();

    return(
        // the card
        <div className={`m-5 flex flex-col bg-gradient-to-r from-${color}-300 to-${color2}-300 rounded-xl w-auto`}>
            <span className="select-none py-5 px-5 font-sans font-family: Roboto font-bold text-center text-3xl">{subject}</span>
            {/* <Link to="./Pomo"> */}
                <button renderAs='button' className={`select-none mx-5 my-5 px-3 py-2 place-self-center font-family: Roboto font-bold text-white w-max bg-${color}-500 hover:bg-${color}-700 active:bg-${color}-900 rounded-xl transition-all`}onClick={() => click(subject,tasks)}>View</button>
            {/* </Link> */}
        </div>
    );
}

export default Card;