import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Todos from './Todos';
import NewTodo from './NewTodo';
import ControlBtns from './ControlBtns';

function App() {
  const [todos, setTodos] = useState([
          {name:"Read a book", done:true},
          {name:"Write a blog",done:true},
          {name:"Make a video",done:false},
          {name:"Reply comments",done:true}
  ])

  const handleNewTodo = (todo)=>{
    if (!todo){
      return;
    }
    const newTodos = todos.concat([{name:todo,done:false}]);
    setTodos(newTodos)
  }

  const toggleDone = (index)=>{
    const newTodos = todos.map((todo,i) => {
      if(i!=index){
        return todo;
      }

      return{name:todo.name,done:!todo.done}
    });
    setTodos(newTodos)
  }

  const totalRemaining = todos.filter((todo)=>{
    return todo.done === false;
  }).length;

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='todo-content'>
        <NewTodo onNewTodo={(todo) => handleNewTodo(todo)}/>
        <Todos todos={todos} onToggleDone={(i) => toggleDone(i)}/>
        <br/>
        <div className='todo-btn'>
          <div>{totalRemaining} items left</div> 
          <ControlBtns/>
        </div>
      </div>
    </div>
  );
}

export default App;
