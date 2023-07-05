import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
//Arquivo App JSX
//Componente funcional = porque ele é uma função
function App() {
  //Todo componente deve retornar um html entre parenteses
  return (
    // O react substitui className por classe porque class é palavra reservada do JS
    <>
    {/* Nosso cabecalho tem uma propriedade  */}
    <Cabecalho/>
    <Rodape/>
    </>
  );
}

export default App;
