import { useState } from "react";
import "./NewTodo.css"

function NewTodo({onNewTodo}){
    const [todo,setTodo] = useState('');
    const handleClick = () => {
        if (!todo){
            return;
        }

        onNewTodo(todo);
        setTodo("");
    };

    const handleChange = (e) => {
        const todo = e.target.value;
        setTodo(todo);
    };

    return (
        <div className="new-todo">
            <input type="text" onChange={handleChange} value={todo} placeholder="What needs to be done?"/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default NewTodo;