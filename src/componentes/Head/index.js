
import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`


const Logo = () => {
    return (


        <LogoContainer>
            <LogoImage
                src={logo}
                alt="Logo da AluraBooks-React" />
            <p> AluraBooks-<strong>React</strong>  </p>
        </LogoContainer>



    );
}

export default Logo;