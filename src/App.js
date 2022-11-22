import Konyv from './Konyv.js';
import './App.css';

const BookObjects=[{
  title:'Malevil',
  author:'Ribert Nerle',
  price:11032
},{
  title:'Védett Férfiak',
  author:'Ribert Nerle',
  price:32032
},{
  title:'Állati elmék',
  author:'Ribert Nerle',
  price:42132
}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore</h1>
      </header>
      <article>
        <Konyv BookObject={BookObjects[0]} /> 
        <Konyv BookObject={BookObjects[1]} />
        <Konyv BookObject={BookObjects[2]} />
      </article>
      <footer><p>György Krisztián</p></footer>
    </div>
  );
}

export default App;
