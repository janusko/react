import React, { useState } from "react";

function ConditionalRendering() {
    const employees = ['Ryan', 'Mick', "Jacque"];

    // && always checks to the left first for the conditional. Then checks for next conditional to the right, if there isn't a conditional to the right, then it will return whatever is after the &&

    const firstEmployee = employees && employees[0];
    // conditional can also be thrown in variables-- in this case checking if employees is defined.

    const [loggedIn, setLoggedIn] = useState(false);  // probably come from back end or state or prop


    return (
        <div className='App'>
            {employees && employees.length > 0 && (
            <div>
                <h2>Employee List: </h2>
                {employees.map((employee) => (
                    <h3> {employee} </h3>
                ))}

                {/* 1. if employees returns undefined, then .map() will throw a type error.*/}
                {/* if employees is an empty array, .map() will run, but now displaying nothing, beside awkward Employee List:. We will want to create a conditional. */}

                {/* 2. Next we want to create a conditional and put div with h2 inside of () */}
                {/* if employees is undefined, we will still get a typeerror, but this time, because of undefined cannot have a length */}
                {/* Now need to add a second conditional to make sure employees is not undefined */}

                {/* 3. the employees && checks if there is an employee first off (undefined is filtered out here) */}
                {/* this could also be added to variables as seen in firstEmployee */}

                {/* 4. next is ternary operators */}
                {/* condition? true: false */}

                <h1>Welcome to the App!</h1>
                <button onClick ={() => setLoggedIn(!loggedIn)}>
                    {loggedIn ? "Logout" : "Login"}
                </button>
                {loggedIn ? (
                    <h1>Hello Anthony</h1>  // would be something like {user.firstName}
                    ) : (
                        <div>
                            <h2>Please log in to continue</h2>
                        </div>
                    )}
                // () to denote that we want to use JSX
            </div>
            )}
        </div>
    )
}

export default ConditionalRendering