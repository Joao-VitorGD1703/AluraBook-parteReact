
import Logo from '../Head';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../OpcoesIcones';
import styled from 'styled-components'

const HeaderContainer = styled.header`

        width: 100%;  
        background-color:  #fff;
        display: flex;
        justify-content: center;
       

`

function HeaderPrincipal() {
    return (

        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />

        </HeaderContainer>
    );
}

export default HeaderPrincipal;