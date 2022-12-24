

import HeaderPrincipal from './componentes/HeaderPrincipal';
import styled from 'styled-components';
import Pesquisar from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import CardRecomenda from './componentes/CardRecomenda';
import fotoBanner from './img/livro2.png'


const AppContainer = styled.div`
 
      width: 100%;
      height: 100%;
      overflow: hidden;
    
  

  .App-header {
      background-color: #FFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .lista-cont {
      display: flex;
      justify-content: center;

  }

  .lista {
      display: flex;
      list-style: none;


  }

  .lista li {

      padding: 0 1em;
      margin: 0 1em;
      justify-content: center;
      text-align: center;
      font-size: 18px;
      


  }



  .lista a {
      text-decoration: none;
      color: #252525;
      font-weight: 500;
  }


`

function App() {
  return (
    <AppContainer >
      <HeaderPrincipal/>
      <Pesquisar/>
      <UltimosLancamentos/>
      <CardRecomenda
        titulo="Talvez se interesse por..."
         subtitulo="Angular 11"
        descricao= "Construindo uma aplicação integrada com a plataforma Google."
        img={fotoBanner}
        botao="Saiba Mais"
       />
    </AppContainer>
  );
}

export default App;