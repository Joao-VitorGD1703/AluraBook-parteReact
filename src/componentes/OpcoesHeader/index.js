
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: #252525;
    text-decoration: none;
`

const Opcoes = styled.ul`
    display: flex;
`

const LinkA = styled.a`

    text-decoration: none;
    color: #252525;
    font-weight: 500;

`

const textoOpcoes = [

  {
    nome: 'CATEGORIAS',
    link: 'https://www.youtube.com/',
    alt: 'vai para outro site',
  },

  {
    nome: 'FAVORITOS',
    link: 'https://www.fiap.com.br/',
    alt: 'vai para outro site',
  },

  {
    nome: 'MINHA ESTANTE',
    link: 'https://mailchimp.com/',
    alt: 'vai para outro site'
  }
]

const OpcoesHeader = () => {
    return (

        
            <Opcoes > {
                textoOpcoes.map((texto) => (
                    <Opcao> <LinkA href={texto.link} alt={texto.alt}> <p className="opcao"> {texto.nome} </p></LinkA></ Opcao>
                ))
            }
            </Opcoes>
      

    );
}

export default OpcoesHeader;