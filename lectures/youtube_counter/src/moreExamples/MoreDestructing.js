import React, { useState } from "react";

// const [count, setCount] = useState();
// returns an array of items: first item will be variable count(has value inside of it), second function called setCount called whenever you want to set count.

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a) // [10]
// console.log(b) // [20]
// console.log(rest) // [30, 40, 50]

const employee = {
    id: 'ABC',
    name: 'Anthony',
    salary: '50000',
    address: {
        salary: '100000',
        // salary just an example to show if you have two keys with the same name in different nests
        street: '210 Washington Street',
        country: 'Canada',
        province: 'Ontario',
        zones: {
            plantZone: '7B',
            alienZone: '41'
        }
    }
}

function MoreDestructuring() {
    const {name, id, salary: employeeSalary, address} = employee;
    const { salary: addressSalary, street, country, province, zones} = address;
    // alias variable, set variables names for keys that have the same name.
    const { plantZone, alienZone } = zones;
    // create a const for each nested object to be able to destructure nicely

    // Destructing in place: Everything all-in-one. Hard to follow.
    // const {
    //     name, 
    //     id, 
    //     address: {
    //         street, 
    //         country, 
    //         province, 
    //         zones: {
    //             plantZone: myPlantZone, 
    //             alienZone}
    //         }
    //     }

    return (
        <div className="App2">
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h2>{employeeSalary}</h2>
            {/* <h2>{address.street} {address.country} {address.province} {address.zones.plantZone}</h2> */}
            {/* Could get really messy without destructing multiple objects in objects */}
            <h2>{`Employee address: ${street}, ${country}, ${province} ${addressSalary}`}</h2>
            <h2>{`Plant Zone: ${plantZone}`}</h2>
        </div>
    );
}

export default MoreDestructuring