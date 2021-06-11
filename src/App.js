import './index.css';
import { useState } from "react";
import Card from "./Card"
import plus from "./icons/plus.png";
import Pomo from './Pomo';

function App() {
  const [cards, setCards] = useState([]);

  const [isPomo, setPomoState] = useState(false);
  const [pomo, setPomo] = useState({});
  const [pomoTasks, setPomoTasks] = useState([]);
  const [pomoColors, setPomoColors] = useState([]);
  const [updated, setUpdated] = useState(false);

  
  const deleteCard = (subject) => {
      for (var i=0; i<cards.length; i++) {
          if (cards[i].subject === subject){
              cards.splice(i,1);
              setUpdated(true);
          }
      }
  }

  const openPomo = (subject, tasks, colors) => {
     setPomo(subject);
     setPomoTasks(tasks);
     setPomoColors(colors)
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
      tempCard.tasks = [];
      tempCard.colors = [];
      setCards(cards => [tempCard, ...cards ]);
      //close the popup form
      setOpen(!isOpen);
      setUpdated(true);
    }
    
  }

  return (
    <div className="px-10 py-7 bg-gray-200 min-h-screen min-w-screen">
      <div className="px-5 py-5">
        <span className="font-sans font-family: Roboto font-bold text-gray-900 text-7xl select-none">Pomo Dodoco</span>
      </div>
      {isPomo ? (
        <>
          <Pomo subject = {pomo} task_list = {pomoTasks} colors = {pomoColors} backClick = {closePomo}/>
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
      <div className="grid grid-cols-4 gap-2 justify-around">
        {updated || cards.map(card => (
          <Card subject={card.subject} tasks={card.tasks} colors={card.colors} click = {openPomo} deleteCard={deleteCard}/>
          
        ))}
        {updated ? setUpdated(false): ""}
      </div>
      <div className="fixed bottom-12 right-12 rounded-full bg-transparent w-20 h-20 hover:bg-gray-500 transition-all">
        <button className="w-20 h-20 text-5xl" onClick={() => {newCard()}}>
          <img className="w-full h-full" src={plus} alt="add"/>
        </button>
      </div>
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
  );
}

export default App;
