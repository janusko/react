import React, { useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    // count is variable, setCount is a function, in useState() is just the default value

    // adding in useEffect-- will only run once when you first mount, and depending on design, will run when it component updates and/or when it's unmounting/done
    useEffect(() => {
        console.log('The component has mounted');
        return () => {
            console.log('The component has unmounted');
        };
    }, []);
    // this would run everytime we click 'Show Counter' and each time we increment our count.
    // once we add an [] at the end of the useEffect, it will only run if a component is mounted, ie. Show Counter. Now on increment, the the console.log won't run.
    // [] runs as a "componentDidMount"-- everything with the {} is the first parameter of our useEffect Hook.
    // The second parameter/argument is the [], if it is NOT provided, it will take it as undefined, and your component will run all the time.
    // What the array does says only want to run what is inside the useEffect if the things inside of the array runs
    
    const handleIncrement = () => setCount(count + 1);
    // whenever setCount is called, we are re-render the DOM with whatever is in the ()

    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </React.Fragment>
    )
};

export default Counter;
