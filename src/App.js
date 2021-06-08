import './index.css';
import { useState } from "react";
import Card from "./Card"
import plus from "./icons/plus.png";

function App() {
  // experimental feature, don't modify
  const [page, setPage] = useState("home");

  // experimental feature, don't modify
  const handleClick = (pageValue) => {
    setPage(pageValue);
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
      tempCard.tasks= [];
      setCards(cards => [tempCard, ...cards ]);
      //close the popup form
      setOpen(!isOpen);
    }
    
  }

  const [cards, setCards] = useState([
    {subject: "CMSC137", tasks: []},
    {subject: "CMSC173", tasks: []},
    {subject: "CMSC180", tasks: []},
    {subject: "CMSC190", tasks: []},
    {subject: "CMSC142", tasks: []},
    {subject: "CMSC137", tasks: []},
    {subject: "CMSC173", tasks: []},
    {subject: "CMSC180", tasks: []},
    {subject: "CMSC190", tasks: []},
    {subject: "CMSC142", tasks: []}
  ]);

  return (
    <div className="px-5 bg-indigo-900 h-full w-full">
      <div className="px-5 py-5">
        <span className="font-sans font-bold text-white text-7xl">Most Recent</span>
      </div>
      <div className="px-5 py-3">
        <span className="font-sans font-semibold text-white text-2xl">Go back to what you were working with...</span>
      </div>
      {/* grid of cards */}
      <div className="grid gap-2 grid-cols-4 justify-around">
        {cards.map(card => (
          <Card subject={card.subject} tasks={card.tasks} click={handleClick}/>
        ))}
      </div>
      <div className="fixed bottom-16 right-16 rounded-full bg-white w-20 h-20">
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
      {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> New Card </h3>
                </div>
                <div className="relative p-6 flex-auto">
                <form onSubmit = {handleSubmit}>
                    <label className="font-sans my-4 text-blueGray-500 text-lg leading-relaxed">
                      Card Name: 
                      <input type="text" id = "name" name= "name" placeholder =" Enter card name"/>
                    </label>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      
                      <button
                        className="font-sans text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setOpen(false)} > Cancel </button>
                      
                      <input className="font-sans bg-indigo-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit" value= "Add Card" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
    
    
  );
}

export default App;
