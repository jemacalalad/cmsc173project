import React, { useState } from "react";
import Task from "./Task";
import Timer from "./Timer";
import plus from "./icons/plus.png";
import back from "./icons/back.png";
import "./index.css";

function Pomo({subject, task_list, colors, backClick}) {
    // initialization of variables and states
    const initialMinutes = 25;
    const initialSeconds = 0;
    const [taskOpen, setTaskOpen] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [startClicked, setStartClicked] = useState(false);

    // when creating a new task
    const newTask = () => {
        setTaskOpen(!taskOpen);
    }

    // handler when the start button is clicked
    const handleStartClicked = (startState) => {
        setStartClicked(startState);
    }

    // deletes a task
    const deleteTask = (name) => {
        for (var i=0; i<task_list.length; i++) {
            // finds the specific task in the array
            if (task_list[i].name === name){
                if(startClicked){
                    // if the timer is running, do not delete yet
                    task_list[i].taskColor = "gray"
                }else{
                    // if the timer is not running, remove from the array
                    task_list.splice(i,1);
                }
                // update the state
                setUpdated(true);
            }
        }
    }

    // for the addition of task
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
            setUpdated(true);
            //close the popup form
            setTaskOpen(!taskOpen);
        }
    }

    if(subject !== "null"){
        return(
            <div className={`min-w-screen min-h-screen bg-gradient-to-r from-${colors[0]}-300 to-${colors[1]}-300 rounded-md`}>
                <div className="py-6 px-7">
                    {/* back button */}
                    <div className="rounded-full bg-transparent w-12 h-12 hover:bg-gray-200 active:bg-gray-600 transition-all">
                        <button className="w-12 h-12" onClick={backClick}>
                            <img className="w-full h-full" src={back} alt="back"/>
                        </button>
                    </div>
                </div>
                <div className="px-6 py-3">
                    {/* title */}
                    <span className="font-sans font-family: Roboto font-bold text-gray-900 text-5xl select-none">{subject}</span>
                </div>
                <div className="mt-10 flex flex-row justify-evenly">
                    {/* the pomo timer section */}
                    <div className={`flex flex-col rounded-2xl w-1/3 h-96 bg-${colors[1]}-400 justify-evenly`}>
                        <div className="p-3 h-1/5 text-center">
                            <span className="font-sans font-family: Roboto font-bold text-gray-900 text-2xl select-none">Timer</span>
                        </div>
                        <div className="p-3 h-full text-center flex-col place-items-center">
                            <Timer initialMinutes={initialMinutes} initialSeconds={initialSeconds} color={colors[0]} handleStartClicked={handleStartClicked}/>
                        </div>
                    </div>
                    <div className="flex-col rounded-xl px-7 w-7/12 h-96 overflow-y-scroll">
                        {/* the tasks section */}
                        <div className={`sticky top-0 p-3 w-full h-max rounded-md bg-${colors[0]}-600 font-sans font-family: Roboto font-bold text-white text-2xl`}>Tasks</div>
                        {subject !== "none" ? (
                        <div className="px-2">
                            { updated || task_list.map((task, key) => (
                                <Task key={key} name={task.name} color={task.taskColor} deleteTask={deleteTask}/>
                            ))}
                            { updated ? setUpdated(false): ""}
                        </div>
                         ) : null}
                    </div>
                </div>
                {/* add a task */}
                <div className="fixed bottom-12 right-12 rounded-full bg-transparent w-20 h-20 hover:bg-gray-200 active:bg-gray-600 transition-all">
                    <button className="w-20 h-20 text-5xl" onClick={startClicked ? () => alert("Timer has started!") : newTask}>
                        <img className="w-full h-full" src={plus} alt="add"/>
                    </button>
                </div>
                {/* if the task popup is open */}
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