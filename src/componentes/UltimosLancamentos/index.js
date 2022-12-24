
import { livros } from "./dadosUltimosLancamentos";
import styled from 'styled-components'
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import fotoBanner from "../../img/livro2.png"


const UltimosLancamentosContainer = styled.section`
   
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5em 10em;
    border-radius: 50px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
`


const NovosLivrosContainer = styled.div`

   
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
`
const titulos = [
    { nome: 'Últimos Lançamentos' }
]

// const dadosCardRecomenda = {

//     tituloH3: 'Talvez se interesse por...',
//     tituloH4: 'Angular 11',
//     paragrafoP: 'Construindo uma aplicação integrada com a plataforma Google.',
//     fotoSrc: fotoBanner,
//     textoButton: 'Saiba Mais'
// }

function UltimosLancamentos(props) {




    return (

        <UltimosLancamentosContainer>
            <Titulo
                cor=" #EB9B00"
                tamanhoFonte="30px"
                alinhamento="center"
            >
                {titulos.map(titulos => (
                    <h2>{titulos.nome}</h2>
                ))}

            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livros => (
                    <img src={livros.src} alt="ok" />

                ))}

            </NovosLivrosContainer>

            

        </UltimosLancamentosContainer>

    );
}

export default UltimosLancamentos;



                    // <CardRecomenda
                    // titulo="Talvez se interesse por..."
                    // subtitulo="Angular 11"
                    // descricao= "Construindo uma aplicação integrada com a plataforma Google."
                    // img={fotoBanner}
                    // botao="Saiba Mais"
                    // />