import styled from "styled-components";

export const Titulo = styled.h2`
     
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.backGraund || "#EBECEE"};
    color: ${props => props.cor ||'#EB9B00'};
    font-size: ${props => props.tamanhoFonte || '30px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
     text-transform: uppercase;
    border-radius: 50px;
`
