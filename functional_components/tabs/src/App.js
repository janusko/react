import './App.css';
import Tabs from './components/Tabs';
import React, { useState } from 'react';

function App() {
  const [currentTab, setCurrentTab] = useState('');
  const [currentInfo, setCurrentInfo] = useState('');
  const [list, setList] = useState([]);

  const requestedTab = ( newTab, newInfo ) => {
    setCurrentTab( newTab );
    setCurrentInfo ( newInfo );
    setList([...list, {"tab": newTab, "info": newInfo}])
  }

  return (
    <div className="App">
      <Tabs onNewRequest = { requestedTab }/>
    </div>
  );
}

export default App;
