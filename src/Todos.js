import Todo from "./Todo";
import "./Todos.css"

function Todos({todos,onToggleDone,onDeleteTodo}){
    return (
        <ul className="todo-list">
            {todos.map((todo,i)=>{
            return <Todo todo={todo} onClick={(e)=>onToggleDone(i)} onDelete={(e)=>onDeleteTodo(i)}/>
            })}
        </ul>
    );
}

export default Todos;
