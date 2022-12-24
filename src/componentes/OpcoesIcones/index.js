// import './opcoesIcones.css'

import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const IconeLi = styled.li`
    margin-right: 40px;
    width: 25px;
    list-style: none;
`

const IconeUl = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <IconeUl>
            { icones.map( (icone) => (
            <IconeLi ><img src={icone} alt="ok"></img></IconeLi>
            )) }
        </IconeUl>
    )
}

export default IconesHeader