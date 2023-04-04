import Todo from "./Todo";
import "./Todos.css"

function Todos({todos,onToggleDone}){
    return (
        <ul className="todo-list">
            {todos.map((todo,i)=>{
            return <Todo todo={todo} onClick={(e)=>onToggleDone(i)}/>
            })}
        </ul>
    );
}

export default Todos;
