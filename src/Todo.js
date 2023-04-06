import "./Todo.css"
function Todo({todo, onClick,onDelete}){
    return (
        <li className="todo-item">
            <div>
                <input
                    className="todo-checkbox"
                    type="checkbox"
                    onClick={onClick}
                    checked={todo.done? 'checked':''}>
                </input>
                {todo.name}
            </div>
            <button onClick={onDelete}>x</button>
        </li>
    );
}

export default Todo;