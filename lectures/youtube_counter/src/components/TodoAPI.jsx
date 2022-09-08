import React, { useState, useEffect } from "react";
import axios from 'axios'


const TodoList = () => {
    const [todos, setTodos] = useState();
    // componentDidMount - we only want to load data one time

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos)
        });
    }, []);
    // adding empty array, because we only want it to run one time when the component mounts
    // res = response
    // 1. Our TodoList is being rendered, and as soon as it get rendered this useEffect will run.
    // 2. Once useEffect runs, it makes an axios request to the API provided endpoint.
    // 3. After requested is done, it has a callback function with variable call res(response). Which sets the todos in our state variable equal to whatever the reponse data is at the endpoint.

    // 4. To display, we will .map() through it in our return
    // 5. Make conditional to make sure we are only mapping through if it is defined. In initial state we are setting it to undefined, before useEffect gets change to run, as it takes times to run

    console.log(todos)

    return (
        <div>
            <h2>Todo List</h2>
            {todos && todos.map(todos => {
                const {id, userId, title} = todos;
                return(
                    <div key={id}>
                        <h3> {title} </h3>
                        <h6> Assigned to: {userId} </h6>
                    </div>
                )
            })}
        </div>
    );
};

export default TodoList