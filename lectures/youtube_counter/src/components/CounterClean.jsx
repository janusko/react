// useEffect & useEffect with API Requests

import React, { useState, useEffect } from 'react'

const CounterClean = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);


// componentDidMount equivalent
    // useEffect(() => {
    //     console.log('The useEffect ran');
    // }, []);
    // useEffect takes to parameter: first, a function. Second, an array.
    // this specific useEffect acts as a "componentDidMount" -- the array, tells us when the useEffect should run... if you pass an empty, it tells the useEffect to only run when the first render is. After that, it will not rerun because it is empty


// componentDidUpdate equivalent
    // useEffect(() => {
    //     console.log('The useEffect ran');
    // }, [count, count2]);
    // by adding the count into the array, it will now run/console.log each time we increment, too.
    // note, useEffect will always run on componentDidMount no matter what.
    // we are passing in a variable (count) that our useEffect depends on.
    // this will only recall useEffect if the variable passed into the array(can have multiple) is updated


// componentWillUnmount
    // useEffect(() => {
    //     console.log('The useEffect ran');
        // return () => {
        //     console.log('Unmounting...')
    //     }
    // }, []);


// AVOID THIS ONE!!
    // useEffect(() => {
    //     console.log('The useEffect ran');
    // });
    // no array. It will update on everything. Will pass in everything.


// Combined update useEffect with cleaning
    useEffect(() => {
        console.log(`The count has updated to ${count}`);
        return () => {
            console.log(`We are in the cleanup - the count is ${count}`);
        };
    }, [count]);
    // This will run like a componentWillUnmount anytime our variable in the array changes.
    // When variable is in array. Order: updated, reloaded application. Before the count fully changes, we run the cleanup function. Cleanup function happens right before the count updates, that's why when console.log, it says count is zero not one. And why after the usEffect reruns saying it has been updated.
    


    const handleIncrement = () => setCount(count + 1);
    const handleIncrement2 = () => setCount2(count2 + 1);
    // unless you add count2 into the useEffect array, the button will NOT work.
    // once you add it to the arrayt (plus all of the other count2 info), the console.log will show that it is updating, but the display count will not because it is set to {count}


    return (
        <div>
            <h6> Counter </h6>
            <p> current count: {count} </p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrement2}>Increment 2</button>
        </div>
    )
};

export default CounterClean;
