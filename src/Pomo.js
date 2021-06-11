import React, { useState } from "react";
import Task from "./Task";
import plus from "./icons/plus.png";
import back from "./icons/back.png";
import "./index.css";

function Pomo({subject, task_list, colors, backClick}) {
    const [taskOpen, setTaskOpen] = useState(false);
    const [tasks, setTasks] = useState(task_list)
    const [startClicked, setStartClicked] = useState(false);

    const newTask = () => {
        setTaskOpen(!taskOpen);
    }

    const deleteTask = (name) => {
        console.log("CLICKED DELETED")
        for (var i=0; i<task_list.length; i++) {
            if (task_list[i].name === name){
                if(startClicked){
                    console.log("CHANGED COLOR");
                    task_list[i].color = "gray"
                }else{
                    console.log("TASK DELETED");
                    task_list.splice(i,1);
                }
                setTasks(task_list);
             }
        }
    }

    const handleStartClick = (event) => {
        event.stopPropagation();
        startClicked ? setStartClicked(false) : setStartClicked(true);
    }

    const handleTaskSubmit = (event) =>{
        event.stopPropagation();
        event.preventDefault();
        let task = event.target.elements.name?.value.trim();
        //if no name was entered alert the user to enter a name before submitting
        if(task === ""){
        alert("Enter a Task");
        }else{
            //if name was submitted, create and object and add it to the useState for cards
            let tempTask = {};
            tempTask.name = task;
            tempTask.taskColor = colors[1];
            task_list.push(tempTask);
            //close the popup form
            setTaskOpen(!taskOpen);
        }
    }

    if(subject !== "null"){
        return(
            <div className={`min-w-screen min-h-screen bg-gradient-to-r from-${colors[0]}-300 to-${colors[1]}-300 rounded-md`}>
                <div className="py-6 px-7">
                    <div className="rounded-full bg-transparent w-12 h-12 hover:bg-gray-200 active:bg-gray-600 transition-all">
                        <button className="w-12 h-12" onClick={backClick}>
                            <img className="w-full h-full" src={back} alt="back"/>
                        </button>
                    </div>
                </div>
                <div className="px-6 py-3">
                    <span className="font-sans font-family: Roboto font-bold text-gray-900 text-5xl select-none">{subject}</span>
                </div>
                <div className="mt-10 flex flex-row justify-evenly">
                    <div className={`flex flex-col rounded-2xl w-1/3 max-h-96 bg-${colors[1]}-400 justify-evenly`}>
                        <div className="p-3 h-1/5 text-center">
                            <span className="font-sans font-family: Roboto font-bold text-gray-900 text-2xl select-none">Timer</span>
                        </div>
                        <div className="p-3 h-1/2 text-center place-content-center">
                            <span className="font-sans font-family: Roboto font-light text-gray-900 text-9xl select-none">00:00</span>
                        </div>
                        <button className={`rounded-xl mt-5 p-2 mr-7 mb-3 bg-${colors[0]}-600 w-20 self-end font-sans font-semibold text-white hover:bg-${colors[0]}-500 active:bg-${colors[0]}-700 transition-all place-self-center`} onClick={handleStartClick}>{startClicked ? "PAUSE" : "START"}</button>
                    </div>
                    <div className="rounded-xl px-7 pt-7 pb-3 w-7/12 max-h-96 place-content-start">
                        <span className="font-sans font-family: Roboto font-bold text-gray-900 text-2xl select-none">Tasks</span>
                        
                            {subject !== "none" ? (
                            <div className="overflow-auto">
                                {tasks.map((task, key) => (
                                    <Task key={key} name={task.name} color={task.taskColor} deleteTask={deleteTask}/>
                                ))}
                            </div>
                         ) : null}
                    </div>
                </div>
                <div className="fixed bottom-12 right-12 rounded-full bg-transparent w-20 h-20 hover:bg-gray-200 active:bg-gray-600 transition-all">
                    <button className="w-20 h-20 text-5xl" onClick={startClicked ? () => alert("Timer has started!") : newTask}>
                        <img className="w-full h-full" src={plus} alt="add"/>
                    </button>
                </div>
                {taskOpen ? (
                    <>
                        <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none backdrop-filter backdrop-blur"
                        >
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none">
                            <div className="flex px-5 pt-5 rounded-t outline-none">
                                <h3 className="text-3xl font-sans font-family: Roboto font-bold"> New Task </h3>
                            </div>
                            <div className="relative p-6 mt-3 flex-auto">
                                <form onSubmit = {handleTaskSubmit}>
                                <label className="select-none font-sans p-5 text-blueGray-500 text-lg leading-relaxed">
                                    Task:
                                    <input autoFocus className="ml-3 p-2 bg-black text-white focus:border-0" type="text" id = "name" name= "name" placeholder =" Enter task"/>
                                </label>
                                <div className="flex mt-8 justify-end rounded-b">
                                    
                                    <button
                                    className="select-none font-sans font-family: Roboto font-normal text-red-500 text-sm uppercase bg-transparent mr-3 px-6 py-3 rounded-xl ease-linear hover:bg-red-600 active:bg-red-800 hover:font-light hover:text-white active:text-white focus:outline-none focus:ring focus:border-red-600 transition-all"
                                    type="button"
                                    onClick={() => setTaskOpen(false)} > Cancel </button>
                                    
                                    <input className="select-none font-sans font-family: Roboto font-bold text-white text-sm uppercase bg-black px-6 py-3 rounded-xl ease-linear shadow outline-none hover:bg-gray-500 active:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring focus:border-white transition-all"
                                    type="submit" value= "Add Task" />
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="opacity-0 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        );
    }
    
}

export default Pomo;