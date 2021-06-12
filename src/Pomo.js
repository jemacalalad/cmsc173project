import React, { useState } from "react";
import Task from "./Task";
import Timer from "./Timer";
import plus from "./icons/plus.png";
import back from "./icons/back.png";
import "./index.css";

function Pomo({ subject, task_list, colors, backClick }) {
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

    const handleTaskSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let task = event.target.elements.name?.value.trim();
        //if no name was entered alert the user to enter a name before submitting
        if(task === ""){
            alert("Enter a Task");
        }
        else {
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

    if (subject !== "null") {
        return(
            <div className={`max-w-screen max-h-screen bg-gradient-to-r from-${colors[0]}-300 to-${colors[1]}-300 rounded-3xl`}>
                {!startClicked ? (
                    <div className="fixed top-14 left-16 w-20 h-20 rounded-full bg-transparent transform hover:-translate-x-2 hover:bg-white transition-all">
                        <button className="w-20 h-20 rounded-full focus:outline-none focus:ring focus:ring-gray-500" onClick={() => backClick()}>
                            <img className="w-full h-full" src={back} alt="back"/>
                        </button>
                    </div>
                ):null}
                {/* card title */}
                <div className="mt-3 pr-10 pt-8 text-right">
                    <span className="font-sans font-family: Roboto font-bold text-gray-900 text-5xl select-none">
                        {subject}
                    </span>
                </div>
                <div className=" mt-10 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-evenly">
                    <div className={`flex flex-col rounded-2xl w-5/6 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xl:h-96 lg:h-72 md:h-60 sm:h-48 bg-gray-800 shadow-xl place-self-center sm:place-self-start md:place-self-start lg:place-self-start xl:place-self-start`}>
                        <div className=" p-4 h-1/5 text-center">
                            <span className="font-sans font-family: Roboto font-bold text-gray-100 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl select-none">
                                Timer
                            </span>
                        </div>
                        <Timer initialMinutes={initialMinutes} initialSeconds={initialSeconds} colors={colors} handleStartClicked={handleStartClicked}/>
                    </div>
                    <div className="rounded-xl px-7 xl:px-0 lg:px-0 md:px-0 sm:pl-0 pt-3 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pb-3 w-full xl:w-7/12 lg:w-7/12 md:w-7/12 sm:w-7/12">
                        <div className="w-full pt-1 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 mt-4 text-center xl:text-left lg:text-left md:text-left sm:text-left">
                            <span className="ml-0 xl:ml-4 lg:ml-4 md:ml-4 sm:ml-4 font-sans font-family: Roboto font-bold text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl select-none">
                                Tasks
                            </span>
                        </div>

                        {subject !== "none" ? (
                            <div className="w-full my-2 h-44 xl:h-96 lg:h-96 md:h-96 sm:h-96 mb-20 xl:mb-24 lg:mb-24 md:mb-24 sm:mb-24 max-h-full overflow-auto">
                                { updated || task_list.map((task, key) => (
                                    <Task key={key} name={task.name} color={task.taskColor} deleteTask={deleteTask}/>
                                ))}
                                { updated ? setUpdated(false): ""}
                            </div>
                        ): null}
                    </div>
                </div>
                {!startClicked ? (
                    <div className="fixed bottom-14 right-16 rounded-full bg-transparent w-16 xl:w-20 lg:w-20 md:w-20 sm:w-20 h-16 xl:h-20 lg:h-20 md:h-20 sm:h-20 hover:bg-white ease-in-out transform hover:scale-105 transition-all">
                    <button className="
                        w-16 xl:w-20 lg:w-20 md:w-20 sm:w-20
                        h-16 xl:h-20 lg:h-20 md:h-20 sm:h-20
                        rounded-full focus:outline-none focus:ring focus:ring-gray-500"
                    onClick={newTask}>
                    <img className="w-full h-full" src={plus} alt="add"/>
                    </button>
                </div>
                ):null}
                {taskOpen ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none backdrop-filter backdrop-blur">
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
                                        className="select-none font-sans font-family: Roboto font-normal text-red-500 text-sm uppercase bg-transparent mr-3 px-6 py-3 rounded-xl ease-linear hover:bg-red-600 hover:font-light hover:text-white focus:outline-none focus:ring focus:border-red-600 transition-all"
                                        type="button"
                                        onClick={() => setTaskOpen(false)} > Cancel
                                    </button>
                                    
                                    <input className="select-none font-sans font-family: Roboto font-bold text-white text-sm uppercase bg-black px-6 py-3 rounded-xl ease-linear shadow outline-none hover:bg-gray-500 hover:shadow-xl focus:outline-none focus:ring focus:border-white transition-all"
                                    type="submit" value= "Add Task" />
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-0 fixed inset-0 z-40 bg-black"></div>
                        </>
                ): null}
            </div>
        );
    }
    
}

export default Pomo;