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
        <button className="w-20 h-20 text-5xl" onClick={() => {console.log("ADD")}}>
          <img className="w-full h-full" src={plus} alt="add"/>
        </button>
      </div>
      {/* Experimental feature, please don't modify */}
      {/* <div className="text-white text-xl">
        <span>{page}</span>
      </div> */}
    </div>
  );
}

export default App;
