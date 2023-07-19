import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Conteudo,{OlaMundo} from './componentes/Conteudo';
//Arquivo App JSX
//Componente funcional = porque ele é uma função
function App() {
  OlaMundo();
  
  //Todo componente deve retornar um html entre parenteses
  return (
    // O react substitui className por classe porque class é palavra reservada do JS
    <>
    {/* Nosso cabecalho tem uma propriedade  */}

    <Cabecalho logo= "favimg.png" titulo="Favorito" subtitulo="Melhor site de vendas da historia"/>
    <Conteudo/>
    <Rodape/>
    </>
  );
}

export default App;
