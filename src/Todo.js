import "./Todo.css"
function Todo({todo, onClick}){
    return (
        <li className="todo-item">
            <input
                className="todo-checkbox"
                type="checkbox"
                onClick={onClick}
                checked={todo.done? 'checked':''}>
            </input>
            {todo.name}
        </li>
    );
}

export default Todo;