import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Brown" />
      <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Black" />
      <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Black" />
    </div>
  );
}

export default App;
