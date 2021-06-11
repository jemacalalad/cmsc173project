import "./index.css";
import deleteIcon from "./icons/delete.png";

function Task({name, color, deleteTask}){
    
    return(
        <div className={`rounded-xl my-5 px-3 h-14 flex flex-row justify-between items-center bg-${color}-600`}>
            {/* the task name */}
            <span className="font-sans font-family: Roboto text-white font-semibold text-md select-none truncate">{name}</span>
            {/* the task's delete button */}
            <div className="rounded-full bg-transparent w-10 h-10 bg-gray-400 hover:bg-gray-200 active:bg-gray-600 transition-all">
                <button className="w-10 h-10" onClick={() => deleteTask(name)}>
                    <img className="w-full h-full" src={deleteIcon} alt="delete"/>
                </button>
            </div>
        </div>
    );
}

export default Task;