import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Todo from './Todo';
import Todos from './Todos';
import NewTodo from './NewTodo';

function App() {
  
  const [todos, setTodos] = useState([
          {name:"Shop for Easter dinner", done:true,isdisplay:true},
          {name:"Walk my dog",done:true,isdisplay:true},
          {name:"Read a new chapter before sleep",done:false,isdisplay:true},
          {name:"Unload dishwasher",done:true,isdisplay:true}
  ]);
  const [tempTodos, setTempTodos] = useState(todos);

  const handleNewTodo = (todo)=>{
    if (!todo){
      return;
    }
    const newTodos = todos.concat([{name:todo,done:false,isdisplay:true}]);
    setTodos(newTodos);
    const newTempTodos = tempTodos.concat([{name:todo,done:false,isdisplay:true}]);
    setTempTodos(newTempTodos);
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

  // const totalRemaining = todos.filter((todo)=>{
  //   return todo.done === false;
  // }).length;

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo,i) => {
      if(i != index){
        return todo
      }
    });
    setTodos(newTodos);
  }

  const displayAllTodos = ()=>{
    const newTodos = tempTodos.map((todo)=>{
      return todo;
    });
    setTodos(newTodos);
    console.log(tempTodos)
  }

  const displayCompleted = () => {
    const displayCompleted = tempTodos.filter((todo) => {
      return todo.done === true;
    });
    setTodos(displayCompleted)
    console.log(tempTodos)
  }
  
  const displayUncompleted = () => {
    const displayUncompleted = tempTodos.filter((todo) => {
      return todo.done === false;
    });
    setTodos(displayUncompleted);
    console.log(tempTodos)
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='todo-content'>
        <NewTodo onNewTodo={(todo) => handleNewTodo(todo)}/>
        <Todos todos={todos} onToggleDone={(i) => toggleDone(i)} onDeleteTodo={(i) => deleteTodo(i)}/>
        <br/>
        <div className='todo-option'>
          <a href="#" onClick={displayAllTodos}>All</a>
          <a href="#" onClick={displayCompleted}>Completed</a>
          <a href="#" onClick={displayUncompleted}>Uncompleted</a>
        </div>
      </div>
    </div>
  );
}

export default App;
