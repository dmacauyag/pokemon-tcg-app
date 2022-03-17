import { Router } from './components/Router';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon TCG App</h1>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
};

export default App;
