import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Todos from './Todos';
import NewTodo from './NewTodo';

function App() {
  const [todos, setTodos] = useState([
          {name:"Read a book", done:true,isdisplay:true},
          {name:"Write a blog",done:true,isdisplay:true},
          {name:"Make a video",done:false,isdisplay:true},
          {name:"Reply comments",done:true,isdisplay:true}
  ])

  const handleNewTodo = (todo)=>{
    if (!todo){
      return;
    }
    const newTodos = todos.concat([{name:todo,done:false,isdisplay:true}]);
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


  const displayOption = () => {
    // const newDisplayTodos = todos.filter((todo) => {
    //   return todo.done === true;
    // });
    const newDisplayTodos = todos.map((todo) => {
      if(todo.done){
        return todo;
      }else{
        todo.isdisplay = false;
        return todo;
      }
    });
    setTodos(newDisplayTodos)
  }


  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo,i) => {
      if(i != index){
        return todo
      }
    })
    setTodos(newTodos)
  }


  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='todo-content'>
        <NewTodo onNewTodo={(todo) => handleNewTodo(todo)}/>
        <Todos todos={todos} onToggleDone={(i) => toggleDone(i)} onDeleteTodo={(i) => deleteTodo(i)}/>
        <br/>
        <div className='todo-btn'>
          <div>{totalRemaining} items left</div> 
          <button>All</button>
          <button onClick={displayOption}>Completed</button>
          <button onClick={displayOption}>Uncompleted</button>
        </div>
      </div>
    </div>
  );
}

export default App;
