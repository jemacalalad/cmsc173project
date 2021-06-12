import "./index.css";
import plus from "./icons/plus.png";

function Task({name, color, deleteTask}){
    return(
        <div className={`rounded-xl my-3 px-3 mx-4 w-11/12 h-14 flex justify-between items-center font-sans font-family: Roboto font-normal text-gray-100 text-md select-none bg-${color}-600 hover:bg-${color}-400 hover:text-gray-900 transition-all`}>
            {/* the task name */}
            <span className="w-11/12 font-sans font-family: Roboto font-light text-md select-none truncate">
                {name}
            </span>
            {/* the task's delete button */}
            <button className="rounded-full bg-transparent w-7 h-7 transform rotate-45 hover:bg-red-500 transition duration-250 focus:outline-none focus:ring focus:ring-white focus:bg-red-500" onClick={() => deleteTask(name)}>
                <img className="w-full h-full filter invert" src={plus} alt="delete" />
            </button>
        </div>
    );
}

export default Task;