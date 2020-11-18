import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My First React App - Counter</h2>
        <Counter initial_value={0} />
        <Counter initial_value={5} />
        <Counter initial_value={-10} />
      </header>
    </div>
  );
}

export default App;
