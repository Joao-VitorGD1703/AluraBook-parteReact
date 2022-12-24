import styled from "styled-components";

const Cont = styled.div`
    background-color: #FFF;
    padding: 2em;
    display: flex;
    width: 50%;
    height: auto;
    color: #252525;
    border-radius: 20px;
     justify-content: space-between;
      align-items: center;
      margin: 2em auto;
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

      

`
const Img = styled.img`
   
    padding: 1em;
    margin: 1em;
     
    

`
const P = styled.h2`
   
    padding: 1em;
    margin: 1em;
    box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px 20px 20px 2px;
    

`

function ContainerLivro(props) {
    return (
        <Cont>
            <P>{props.nome}</P>
            <Img src={props.src} alt="ok" />
        </Cont>
    )
}

export default ContainerLivro;