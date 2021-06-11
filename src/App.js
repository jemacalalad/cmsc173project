import './index.css';
import { useState } from "react";
import Card from "./Card"
import plus from "./icons/plus.png";
import Pomo from './Pomo';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Link } from 'react-router-dom';

function App() {
  // experimental feature, don't modify
  const [page, setPage] = useState("home");


  // experimental feature, don't modify
  const handleClick = (pageValue) => {
    setPage(pageValue);
  };

  const [isPomo, setPomoState] = useState(false);

  const [pomo, setPomo] = useState("none");
  const [pomoTasks, setPomoTasks] = useState([]);
  const [taskOpen, setTaskOpen] = useState(false);

  const openPomo = (subject, tasks) => {
     setPomo(subject);
     setPomoTasks(tasks);
     setPomoState(true);
  }

  const closePomo = () => {
    setPomoState(false);
  };

  //for popUp when adding subject card
  const [isOpen, setOpen] = useState(false);
 
  // will set the isOpen to True
  const newCard = () => {
    setOpen(!isOpen);
  }

  const newTask = () => {
    setTaskOpen(!taskOpen);
  }

  //handle the submission of a new card name
  const handleSubmit = (event) =>{
    event.preventDefault();
    let name = event.target.elements.name?.value.trim();
    //if no name was entered alert the user to enter a name before submitting
    if(name === ""){
      alert("Enter a Card Name");
    }else{
      //if name was submitted, create and object and add it to the useState for cards
      let tempCard = {};
      tempCard.subject = name;
      tempCard.tasks= [];
      setCards(cards => [tempCard, ...cards ]);
      //close the popup form
      setOpen(!isOpen);
    }
    
  }

  const handleTaskSubmit = (event) =>{
    event.preventDefault();
    let task = event.target.elements.name?.value.trim();
    //if no name was entered alert the user to enter a name before submitting
    if(task === ""){
      alert("Enter a Task");
    }else{
      //if name was submitted, create and object and add it to the useState for cards
      let tempTask = {};
      tempTask.name = task;
      setPomoTasks(pomoTasks => [...pomoTasks, tempTask]);
      //close the popup form
      setTaskOpen(!taskOpen);
    }
    
  }

  const [cards, setCards] = useState([
    {subject: "CMSC 137", tasks: [{name: "NEW TASK 1"}]},
    {subject: "CMSC 173", tasks: [{name: "NEW TASK 2"}]},
    {subject: "CMSC 180", tasks: [{name: "NEW TASK 3"}]},
    {subject: "CMSC 190", tasks: [{name: "NEW TASK 4"}]},
    {subject: "CMSC 142", tasks: [{name: "NEW TASK 5"}]},
    {subject: "CMSC 137", tasks: [{name: "NEW TASK 6"}]},
    {subject: "CMSC 173", tasks: [{name: "NEW TASK 7"}]},
  ]);

  console.log(isPomo);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="px-10 py-7 bg-gray-200 min-h-screen min-w-screen">
            <div className="px-5 py-5">
              <span className="font-sans font-family: Roboto font-bold text-gray-900 text-7xl select-none">App name?</span>
            </div>
            {isPomo ? (
              <>
            <Pomo subject = {pomo} task_list = {pomoTasks} backClick = {closePomo}/>
            <div className="fixed bottom-12 right-12 rounded-full bg-transparent w-20 h-20 hover:bg-gray-500 transition-all">
              <button className="w-20 h-20 text-5xl" onClick={() => {newTask()}}>
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
                              className="select-none font-sans font-family: Roboto font-normal text-red-500 text-sm uppercase bg-transparent mr-3 px-6 py-3 rounded-xl ease-linear hover:bg-red-600 hover:font-light hover:text-white focus:outline-none focus:ring focus:border-red-600 transition-all"
                              type="button"
                              onClick={() => setTaskOpen(false)} > Cancel </button>
                            
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
          ) : null}
            </>
          ) : null}
            {!isPomo ? (
              <>
            <div className="px-5 py-5">
              <span className="font-sans font-family: Roboto font-bold text-gray-900 text-4xl select-none">Most Recent</span>
            </div>
            <div className="px-5 -mt-4 mb-6">
              <span className="font-sans font-family: Roboto font-light text-gray-900 text-lg select-none">Go back to what you were working with...</span>
            </div>
            {/* grid of cards */}
            <div className="flex grid grid-cols-4 gap-2 justify-around">
              {cards.map(card => (
                <Card subject={card.subject} tasks={card.tasks} click = {openPomo}/>
                
              ))}
            </div>
            <div className="fixed bottom-12 right-12 rounded-full bg-transparent w-20 h-20 hover:bg-gray-500 transition-all">
              <button className="w-20 h-20 text-5xl" onClick={() => {newCard()}}>
                <img className="w-full h-full" src={plus} alt="add"/>
              </button>
            </div>
            {/* Experimental feature, please don't modify */}
            {/* <div className="text-white text-xl">
              <span>{page}</span>
            </div> */}
            {/*
              If the isOpen is true, open the form for adding a new card
            */}
             </>
          ) : null}
            {isOpen ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none backdrop-filter backdrop-blur"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-2xl">
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none">
                      <div className="flex px-5 pt-5 rounded-t outline-none">
                        <h3 className="text-3xl font-sans font-family: Roboto font-bold"> New Pack </h3>
                      </div>
                      <div className="relative p-6 mt-3 flex-auto">
                        <form onSubmit = {handleSubmit}>
                          <label className="select-none font-sans p-5 text-blueGray-500 text-lg leading-relaxed">
                            Pack Name:
                            <input autoFocus className="ml-3 p-2 bg-black text-white focus:border-0" type="text" id = "name" name= "name" placeholder =" Enter pack name"/>
                          </label>
                          <div className="flex mt-8 justify-end rounded-b">
                            
                            <button
                              className="select-none font-sans font-family: Roboto font-normal text-red-500 text-sm uppercase bg-transparent mr-3 px-6 py-3 rounded-xl ease-linear hover:bg-red-600 hover:font-light hover:text-white focus:outline-none focus:ring focus:border-red-600 transition-all"
                              type="button"
                              onClick={() => setOpen(false)} > Cancel </button>
                            
                            <input className="select-none font-sans font-family: Roboto font-bold text-white text-sm uppercase bg-black px-6 py-3 rounded-xl ease-linear shadow outline-none hover:bg-gray-500 hover:shadow-xl focus:outline-none focus:ring focus:border-white transition-all"
                            type="submit" value= "Add Card" />
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
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
