import React from 'react';

// prop is just a variable that a component can pass into one of it's children components.
const Employee = (props) => {
    // can do destructing in parameter, as well -- const Employee = ({firstName, lastName, age}) =>...
    // console.log(props);

    // Object destructing - the act of taking each field in that object and making it it's own variable
    const {firstName, lastName, age: employeeAge} = props;

    return (
        <div>
            {/* <h5>Employee Name: {props.firstName} {props.lastName}</h5> */}
            {/* <h6>{`Employee Name with string interpilation: ${props.firstName} ${props.lastName}`}</h6> */}
            <h5>Employee Name: {firstName} {lastName}, age: {employeeAge}</h5>
        </div>
    )
}
// added name in App.js component, but nothing is passing in as a parameter in Employee.
// all of those variables (firstName, lastName) will be structured into an object.
// 

export default Employee