import React from 'react';
import Header from './Header';
import '../App.css';
import Todotext from './Todotext';
import TodoList from './TodoList';
import UsetodoState from './UsetodoState';

function App() {

  const {todos, addTodo,deleteTodo} = UsetodoState([]);

  return (
    <div className="App">
        <Header title="Todo Application"/>
        <Todotext saveTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
     </div>
  );
}

export default App;
