import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import{livros} from './dadosPesquisa'
import ContainerLivro from "../ContLivro";



const PesquisaContainer = styled.section`
        
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: auto;
        width: 100vw;
        background-image: linear-gradient(90deg, #002F52 35%, #326589);
        
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Pesquisar = () => {

    const [livrosPesquisados, setLivrosPesquisados] =  useState([])

    console.log(livrosPesquisados);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {livrosPesquisados.map(livro =>(

                <ContainerLivro nome={livro.nome} src={livro.src}/>
               
            ))}
           

        </PesquisaContainer>
    );
}

export default Pesquisar;


//  <div>
//                     <p>{livro.nome}</p>
//                     <img src={livro.src} alt="ok" />
//                 </div>