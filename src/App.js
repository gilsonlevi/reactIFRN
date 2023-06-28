import logo from './logo.svg';
import './App.css';

//Arquivo App JSX
//Componente funcional = porque ele é uma função
function App() {
  //Todo componente deve retornar um html entre parenteses
  return (
    // O react substitui className por classe porque class é palavra reservada do JS
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gilson Levi
        </p>
        <a
          className="App-link"
          href="https://github.com/gilsonlevi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu Git
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
