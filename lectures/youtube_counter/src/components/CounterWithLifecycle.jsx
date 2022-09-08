import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import CounterClean from "./CounterClean";

const CounterWithLifecycle = () => {

const [showCounter, setShowCounter] = useState(false);

    return (
        <div className="App">
            <h1>Our App</h1>
            <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? "Hide Counter" : "ShowCounter"}
            </button>
            {showCounter && <CounterClean />}
        </div>
    )
};


export default CounterWithLifecycle