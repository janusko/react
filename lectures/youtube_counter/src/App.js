import './App.css';
import React from 'react';
import Counter from './components/Counter';
import Employee from './components/Employee';
import CounterWithLifecycle from './components/CounterWithLifecycle';
import CounterClean from './components/CounterClean';
import TodoList from './components/TodoAPI';

const employeeInfo = [
  {
    firstName: 'Jack',
    lastName: 'Smith',
    age: '21',
    employeeID: '1'
  },
  {
    firstName: 'Mick',
    lastName: 'Janusko',
    age: '66',
    employeeID: '2'
  },
  {
    firstName: 'Jacque',
    lastName: 'Janusko',
    age: '38',
    employeeID: '3'
  },
  {
    firstName: 'Lynn',
    lastName: 'Williams',
    age: '68',
    employeeID: '4'
  }
];
// want to make an array, because we have multiple different employees that will have it's own object with those fields below.
// create a .map()

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2> Company Directory</h2>

        {/* <Employee firstName="Jack" lastName="Smith" age="33" />
        <Employee firstName="Mick" lastName="Janusko" age="66"/>
        <Employee firstName="Jacque" lastName="Janusko" age="38"/>
        <Employee firstName="Lynn" lastName="Williams" age="68"/> */}
        {/* Instead of having four different employee components-- want to store employee data elsewhere, create const employeeInfo */}


        {employeeInfo.map(employee => {
          // const {firstName, lastName, age} = employee; // destructing our object
          // return (
          //   <Employee firstName = {firstName} lastName = {lastName} age = {age} />
          // );


          // instead of destructing, as seen just above, we can use the spread operator, since the each employee has same object keys
          // when using the map() function, and returning an element -- good practice to give each object a key parameter passed in. Add employeeID to object and reference in Employee component return as key
          return <Employee key={employee.employeeID} {...employee} />
        })}
        {/* want to loop through each employee object and return  */}


        {/* // <Counter /> */}
        {/* <CounterWithLifecycle /> */}
        {/* <CounterClean /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
