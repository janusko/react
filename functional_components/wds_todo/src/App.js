import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import uuidv4 from 'uuid/v4'
// npm i uuid in terminal -- function that generates random id

const LOCAL_STORE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  // useRef allows us to access the name inputted into field. allows us to reference inside HTML.

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY))
      if (storedTodos) setTodos(storedTodos)
    setTodos()
  })
  // call to load todos, only want to call once, right when component loads.

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(todos))
  }, [todos])
    // function that takes as first parameter another function (function that will do things-- every time something change we call that function-- when to determine to call function, is we pass an array of properties. this array is dependencies. any time something changes in array we want to run this useEffect )
    // saves to LOCAL STORAGE, but when refreshed not showing up. Now up to the useEffect above

  function handleAddTodo(e) {
      const name = todoNameRef.current.value
      // allows us to have access to the current value of the input
      if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
      })
      console.log(name)
      todoNameRef.current.value = null
      // clears out input after button clicked
    }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
