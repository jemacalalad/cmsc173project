import logo from './logo.svg';
import './index.css';
import { useState } from "react";
import Card from "./Card"

function App() {
  const [cards, setCards] = useState([
    {subject: "CMSC137", tasks: []},
    {subject: "CMSC173", tasks: []},
    {subject: "CMSC180", tasks: []},
    {subject: "CMSC190", tasks: []},
    {subject: "CMSC142", tasks: []}
  ]);

  return (
    <div className="px-5 bg-indigo-900 h-screen">
      <div className="px-5 py-5">
        <span className="font-sans font-bold text-white text-7xl">Most Recent</span>
      </div>
      <div className="px-5 py-3">
        <span className="font-sans font-semibold text-white text-2xl">Go back to what you were working with...</span>
      </div>
      {/* grid of cards */}
      <div className="grid gap-2 grid-cols-4 justify-around">
        {cards.map(card => (
          <Card subject={card.subject} tasks={card.tasks}/>
        ))}
      </div>
    </div>
  );
}

export default App;
