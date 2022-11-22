import Konyv from './Konyv.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
      </header>
      <article>
        <Konyv />
        <Konyv />
        <Konyv />
      </article>
      <footer><p>György Krisztián</p></footer>
    </div>
  );
}

export default App;
