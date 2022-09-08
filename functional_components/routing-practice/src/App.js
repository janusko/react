import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import { useParams } from "react-router-dom";
    
const Home = (props) => {
  return (
    <div>
        <h1>Welcome</h1>
    </div>
  );
}
    
const Number = (props) => {
  const {number} = useParams();
  return (
    <div>
        <h1>The number is: {number}</h1>
    </div>
  );
}

const Word = (props) => {
  const {word} = useParams();
  return (
    <div>
        <h1>The word is: {word}</h1>
    </div>
  );
}
    
const WordAndColors = (props) => {
  const {word} = useParams();
  const {color} = useParams();
  const {backgroundColor} = useParams();
  return (
    <div>
        <h1 style={{color: color, backgroundColor: backgroundColor}}>The word is: {word}</h1>
        {/* <Link to={"/"}>Go Home</Link>  */}
    </div>
  );
}
    



function App() {
  return (
    <div>
      {/* <h1>Routing Example</h1> */}
      <Routes>
        <Route path="/:number" element={<Number />} />
        <Route path="/" element={<Home />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color/:backgroundColor" element={<WordAndColors />} />
      </Routes>
    </div>
  );
}
    
export default App