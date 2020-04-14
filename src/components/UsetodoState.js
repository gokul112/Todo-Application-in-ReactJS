import {useState} from 'react';

export default (initialState) => {

  const [todos, setTodos] = useState(initialState);

  return {
    todos,
    addTodo: (todoText) => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) 
            setTodos([...todos, trimmedText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    }
  };
}
