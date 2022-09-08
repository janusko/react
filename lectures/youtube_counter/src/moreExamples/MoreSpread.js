import React, {useState} from 'react';
import Employee from '../components/Employee';

const employee = [
    {
        name: 'Ryan',
        id: '1'
    },
    {
        name: 'Jacque',
        id: '2'
    }
];

function MoreSpread() {

    // const arr1 = [0, 1, 2];
    // const arr2 = [3, 4, 5];
    // const arr3 =[-1, ...arr1 , ...arr2]
    // console.log(arr3) // [-1,0,1,2,3,4,5]

    // let a, b, rest;
    // [a, b, ...rest] = [10, 20, 30, 40, 50]
    // console.log(a) // [10]
    // console.log(b) // [20]
    // console.log(rest) // [30, 40, 50]

    const baseEmployeeObject = {
        role: 'employee',
        company: 'CodeSandbox'
    }
    // const firstEmployee = employee[0];
    const firstEmployee = {...baseEmployeeObject , ...employee[0]};
    // allows us to add baseEmployee info with each employee
    console.log(firstEmployee)


    return (
        <div className='App'>
            {/* {/* <Employee name={fisrtEmployee.name} id={firstEmployee.id} /> */}
            <Employee {...firstEmployee} />

        </div>
    )
}

export default MoreSpread