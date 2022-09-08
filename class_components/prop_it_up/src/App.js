import './App.css';
import React from 'react';
import PersonCard from './components/component.js'

function App() {
  return (
    <div className="Person">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Brown"} />
      <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Black"} />
      <PersonCard lastName={"Fillmore"} firstName={"Millard"} age={50} hairColor={"Black"} />
      <PersonCard lastName={"Smith"} firstName={"Maria"} age={62} hairColor={"Black"} />
    </div>
  );
}

export default App;
