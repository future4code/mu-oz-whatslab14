import React from "react";
import Inputs from "./Components/Inputs"
import styled from 'styled-components'
import enviar from './img/enviar_30.png'

const Body = styled.div`
 *{
margin:0;
padding:0;

}
`


const CorFundo = styled.div`
  width: 1920px;
  height: 100vh;
  background: #028235;
`
const Titulo = styled.h1`
  color: #FFFFFF;
  padding-bottom:10px;
  font-family: cursive;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 84px;
  text-align: center;
  `
const FundoBranco = styled.div`

  border-radius: 10px;
  height: 80vh;
  box-sizing: border-box;
  width: 800px;
  margin:auto;
  display:flex;
  flex-direction: column;
  background: #FFFFFF;
  
  `
const MessagesContainer = styled.div`
    display:flex;
    flex-grow:1;
    padding: 40px;
    display: flex;
    flex-direction:column-reverse;

  `
const InputsContainer = styled.div`
  display:flex;
  padding:5px;
  border:none;
  

  `
const UsuarioInput = styled.input`
text-align:center;
width: 100px;
margin-bottom:10px;
border-radius: 10px;
border-width: 1px;

 
`
const MessageInput = styled.input`
  flex-grow:1;
  text-align:center;
  margin-bottom:10px;
  border-radius: 10px;
  border-width: 1px;
  flex-wrap:wrap;
  

`
const Botao = styled.button`
  margin-bottom:10px;
  border-radius: 30px;
  width: 60px;
  cursor: pointer;
  border:none;
  background-color:transparent;

    
  `


export default class App extends React.Component {

  

  state = 
  {
      usuario:'',
      mensagem:'',
      arrayInputs: []
  };

  onChangeUsuario = (e) => 
  {
      this.setState
      (
          {usuario: e.target.value},
      )
      
  };

  onChangeMensagem = (e) => 
  {
      this.setState
      (
          {mensagem: e.target.value},
      )
      
  };

  onClickButton = () => 
  {
      this.setState
      (
          {
               arrayInputs:

               [...this.state.arrayInputs, {usuario:this.state.usuario, mensagem:this.state.mensagem}],

                usuario: "",
                mensagem:""
              
          }
      );
  };

  onKeyPress = (e) => {
    if(e.which === 13) {
      this.onClickButton();
    }
    }
 
 
render(){

return (
<Body>
<CorFundo>

  <div>
   <Titulo className="titulo">
        WhatsLab
      </Titulo>
      
 

  <FundoBranco> 
    <MessagesContainer>
    <Inputs  messages={this.state.arrayInputs} />
    </MessagesContainer>
    

    <InputsContainer> 
      <UsuarioInput 
        type={"text"}
        onChange={this.onChangeUsuario}
        
        value ={this.state.usuario} 
        placeholder='Usuário'
      />

      <MessageInput 
          type={"text"}
          onChange={this.onChangeMensagem} 
          onKeyPress={this.onKeyPress}
          value ={this.state.mensagem}
          placeholder='Mensagem'
      />

      <Botao>
      <img src={enviar} onClick={this.onClickButton}/>
      </Botao>


     
      
      {/* <Botao
         
               
          onClick={this.onClickButton}>
          Enviar
         
      </Botao> */}
    
    </InputsContainer>
   
    
    </FundoBranco>

  </div>
  </CorFundo>
  </Body>

  
   );

  }

};



