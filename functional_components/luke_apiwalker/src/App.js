import './App.css';
import DisplayPeople from './components/SWDisplayPeople';
import DisplayPlanets from './components/SWDisplayPlanets';
import Search from './components/Search';
import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      {/* <Link to={'planets/:id'}>Homeworld</Link> */}

      <Search />
      <Routes>
        <Route path='/people/:id/' element={<DisplayPeople /> } />
        <Route path='/planets/:id/' element={<DisplayPlanets /> }/>
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
