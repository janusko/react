import React, {useState } from "react";
import MoreMapsEmployee from "./MoreMapsEmployee";

// mapping is used for when you have a lot of data and what to display a Component

// const employees = [
//     'Ryan',
//     'Mick',
//     'Caroline',
//     'Jacque'
// ]

const employees = [
    {
        name: 'Ryan',
        id: '1'
    },
    {
        name: 'Mick',
        id: '2'
    },
    {
        name: 'Jacque',
        id: '3'
    }
]

function MoreMapsAndLoops() {

    return (
        <div className="MapsAndLoops">
            {/* <h1>{employees[0]}</h1>
            <h1>{employees[1]}</h1>
            <h1>{employees[2]}</h1>
            <h1>{employees[3]}</h1> */}
            {/* Too cumbersome and unrealistic for larger databases */}


            {/* {employees.map((employee) => (<h1> {employee} </h1>))} */}
            {/* map will implicitly return an array of results inside of it */}


            {/* {employees.map((employee) => ( */}


                {/* // <div> */}
                {/* <h6> {employee.name} </h6>
                //     <h6> {employee.id} </h6> */}
                {/* //     <h6> {`Name: ${employee.name} ID: ${employee.id}`} </h6> */}
                {/* </div> */}
                {/* // wrapping all our mapped employees in a div */}


                {/* // destructuring
                const { name, id } = employees;
                <div>
                    <h6> {`Name: ${name} ID: ${id}`} </h6>
                </div>
            // ))}

            {/* DON'T WANT TOO MUCH LOGIC IN YOUR APP, SHOULD BE IN OWN COMPONENT */}
            {/* move all of it to the component- I left the code in here for reference. */}

            {/* IMPORT MOREMAPSEMPLOYEE */}
            {employees.map((employee) => (
                <MoreMapsEmployee key={employee.id} name={employee.name} id={employee.id} />
            ))}
            {/* now mapping through own custom component */}
            {/* dynamically done */}
            {/* key has to be at top level of the component-- would have to put in div if wrapping */}
            
        </div>
    )
}

export default MoreMapsAndLoops