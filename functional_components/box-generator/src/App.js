import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [list, setList] = useState([]);

  const requestedColor = ( newColor, newSize ) => {
    setList([ ...list, {"color": newColor, "size": newSize} ])
  }

  return (
    <div className="App">
      <ColorForm onNewColor = { requestedColor }/>
      {/* on submit above, the function requestColor is called */}
      <BoxDisplay color={ currentColor } list={list}/>
    </div>
  );
}

export default App;
